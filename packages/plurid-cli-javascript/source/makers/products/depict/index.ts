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
const makeDepictCommand = (
    program: Command,
) => {
    const depict = program.createCommand('depict');

    depict
        .storeOptionsAsProperties(false)
        .description('operate services on the plurid depict');


    return depict;
}
// #endregion module



// #region exports
export default makeDepictCommand;
// #endregion exports
