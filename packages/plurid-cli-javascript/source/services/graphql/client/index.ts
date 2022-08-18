// #region imports
    // #region libraries
    import {
        ApolloClient,
        InMemoryCache,
        createHttpLink,
    } from '@apollo/client/core';

    import fetch from 'cross-fetch';
    // #endregion libraries


    // #region external
    import {
        AuthorizationTokens,
    } from '#data/interfaces';

    import {
        PLURID_API_URL_GRPAHQL,
    } from '#data/constants';
    // #endregion external
// #endregion imports



// #region module
export const authenticationClient = (
    data: AuthorizationTokens,
) => new ApolloClient({
    link: createHttpLink({
        uri: PLURID_API_URL_GRPAHQL,
        credentials: 'include',
        fetch,
        headers: {
            'Authorization': 'Bearer ' + data.token,
            'Authorization-Refresh': 'Bearer ' + data.refreshToken,
        },
    }),
    cache: new InMemoryCache(),
});


const client = new ApolloClient({
    link: createHttpLink({
        uri: PLURID_API_URL_GRPAHQL,
        credentials: 'include',
        fetch,
    }),
    cache: new InMemoryCache(),
});
// #endregion module



// #region exports
export default client;
// #endregion exports
