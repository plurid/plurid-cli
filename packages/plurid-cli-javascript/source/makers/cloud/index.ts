// #region imports
    // #region libraries
    import {
        CommanderStatic,
    } from 'commander';
    // #endregion libraries


    // #region external
    // import {
    // } from '../../commands';
    // #endregion external


    // #region internal
    import makeHypodCommand from './hypod';
    import makePerformerCommand from './performer';
    // #endregion internal
// #endregion imports



// #region module
const makeCloudCommand = (
    program: CommanderStatic,
) => {
    const cloud = new program.Command('cloud');

    cloud
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .description('operate services on the plurid cloud');


    cloud.addCommand(
        makeHypodCommand(program),
    );

    cloud.addCommand(
        makePerformerCommand(program),
    );


    return cloud;
}
// #endregion module



// #region exports
export default makeCloudCommand;
// #endregion exports
