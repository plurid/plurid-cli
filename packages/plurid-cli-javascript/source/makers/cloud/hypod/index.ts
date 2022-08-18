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
const makeHypodCommand = (
    program: Command,
) => {
    const hypod = program.createCommand('hypod');

    hypod
        .storeOptionsAsProperties(false)
        .description('operate services on the plurid hypod');


    return hypod;
}
// #endregion module



// #region exports
export default makeHypodCommand;
// #endregion exports
