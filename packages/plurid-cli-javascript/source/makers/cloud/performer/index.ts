// #region imports
    // #region libraries
    import {
        CommanderStatic,
    } from 'commander';
    // #endregion libraries


    // #region external
    // #endregion external
// #endregion imports



// #region module
const makePerformerCommand = (
    program: CommanderStatic,
) => {
    const performer = new program.Command('performer');

    performer
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .description('operate services on the plurid performer');


    return performer;
}
// #endregion module



// #region exports
export default makePerformerCommand;
// #endregion exports
