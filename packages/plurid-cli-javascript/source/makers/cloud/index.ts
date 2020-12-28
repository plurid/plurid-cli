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


    return cloud;
}
// #endregion module



// #region exports
export default makeCloudCommand;
// #endregion exports
