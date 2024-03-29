// #region imports
    // #region libraries
    import path from 'path';

    import express from 'express';

    import open from 'open';

    import getPort, {
        portNumbers,
    } from 'get-port';
    // #endregion libraries


    // #region external
    import store from '#services/store';

    import client from '#services/graphql/client';
    import {
        GET_ACCESS_CODE_TOKENS,
    } from '#services/graphql/query';
    // #endregion external
// #endregion imports



// #region module
const app = express();
app.use(
    express.static(
        path.join(
            __dirname,
            './server',
        ),
    ),
);
app.get('/access/:accessCode', (req, res) => {
    const accessCode = req.params.accessCode || '';
    store.set('accessCode', accessCode);
    console.log(`\n\tLogging in with access code: ${accessCode}`);

    res.sendFile(
        path.join(
            __dirname,
            './server/access.html',
        ),
    );
});

const fiveMinutes = 1000 * 60 * 5;


const authenticateCommand = async () => {
    const owner = store.get('owner');

    if (owner) {
        console.log(`\n\tLogged in as ${owner.identonym}. Run the 'logout' command to log out and be able to change owners:`);
        console.log('\n\t\tplurid logout\n');
        return;
    }

    const port = await getPort({
        port: portNumbers(33800, 33900),
    });
    const server = app.listen(port);

    const accountLink = `https://account.plurid.com?cli=${port}&cliAccess=true`;
    open(accountLink);
    console.log(`\n\tOpened ${accountLink} in the default browser.`);
    console.log(`\tAuthentication session expires in 5 minutes.`);

    const startTime = Date.now();
    const interval = setInterval(async () => {
        const accessCode = store.get('accessCode');

        if (accessCode) {
            store.set('accessCode', '');
            server.close();
            clearInterval(interval);

            const input = {
                value: accessCode,
            };
            const query = await client.query({
                query: GET_ACCESS_CODE_TOKENS,
                variables: {
                    input,
                },
            });

            const response = query.data.getAccessCodeTokens;
            if (!response.status) {
                console.log(`\n\tSomething went wrong. Could not login.\n`);

                return;
            }

            const {
                data,
            } = response;

            const {
                owner,
                token,
                refreshToken,
            } = data;

            const {
                identonym,
            } = owner;

            store.set('owner', owner);
            store.set('token', token);
            store.set('refreshToken', refreshToken);

            console.log(`\n\tSuccessfully logged in as ${identonym}.\n`);
            return;
        }

        const currentTime = Date.now();
        if (currentTime > startTime + fiveMinutes) {
            server.close();
            clearInterval(interval);

            console.log('\n\tAuthentication session expired. Run the command again to authenticate.');
        }
    }, 1500);
}
// #endregion module



// #region exports
export default authenticateCommand;
// #endregion exports
