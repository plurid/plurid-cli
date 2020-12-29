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
const makeHypodCommand = (
    program: CommanderStatic,
) => {
    const hypod = new program.Command('hypod');

    hypod
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .description('operate services on the plurid hypod');


    return hypod;
}
// #endregion module



// #region exports
export default makeHypodCommand;
// #endregion exports
