// #region imports
    // #region libraries
    import {
        CommanderStatic,
    } from 'commander';
    // #endregion libraries


    // #region external
    import {
        generateCommand,
        deployCommand,
    } from '../../commands';
    // #endregion external
// #endregion imports



// #region module
const makeApplicationCommand = (
    program: CommanderStatic,
) => {
    const application = new program.Command('application');

    application
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .alias('app')
        .description('generate, deploy, and manage plurid applications');

    application
        .command('generate')
        .option(
            '-o, --online',
            'use generator from online registry',
        )
        .description('generate a new plurid application')
        .action(async (commandObject) => {
            const options = {
                online: commandObject.online,
            };
            await generateCommand(options);
        });

    application
        .command('deploy [directory]')
        .description('deploy the plurid application from the current folder or from the target folder to plurid.app')
        .action(async (directory) => {
            await deployCommand(directory);
        });

    return application;
}
// #endregion module



// #region exports
export default makeApplicationCommand;
// #endregion exports
