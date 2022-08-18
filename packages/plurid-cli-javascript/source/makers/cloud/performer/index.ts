// #region imports
    // #region libraries
    import {
        Command,
    } from 'commander';
    // #endregion libraries


    // #region external
    // #endregion external
// #endregion imports



// #region module
const makePerformerCommand = (
    program: Command,
) => {
    const performer = program.createCommand('performer');

    performer
        .storeOptionsAsProperties(false)
        .description('operate services on the plurid performer');


    return performer;
}
// #endregion module



// #region exports
export default makePerformerCommand;
// #endregion exports
