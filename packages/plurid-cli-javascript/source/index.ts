// #region imports
    // #region libraries
    import program, {
        CommanderStatic,
    } from 'commander';
    // #endregion libraries


    // #region external
    import {
        authenticateCommand,
        statusCommand,
        logoutCommand,
    } from './commands';

    import {
        makeApplicationCommand,
        makeCloudCommand,
        makeProductsCommand,
    } from './makers';
    // #endregion external
// #endregion imports



// #region module
async function main(
    program: CommanderStatic,
) {
    program
        .storeOptionsAsProperties(false)
        .passCommandToAction(false);

    program
        .name('plurid')
        .usage('<command>')
        .version('0.0.0-0', '-v, --version')
        .action(() => {
            program.outputHelp();
        });

    program
        .command('status')
        .description('command-line interface state over the plurid machine')
        .action(async () => {
            await statusCommand();
        });

    program
        .command('authenticate')
        .description('login or create an owner account for the plurid machine')
        .action(async () => {
            await authenticateCommand();
        });

    program
        .command('logout')
        .description('logout from the current owner')
        .action(async () => {
            await logoutCommand();
        });


    program.addCommand(
        makeApplicationCommand(program),
    );

    program.addCommand(
        makeCloudCommand(program),
    );

    program.addCommand(
        makeProductsCommand(program),
    );


    program.parseAsync(process.argv);
}


main(program);
// #endregion module
