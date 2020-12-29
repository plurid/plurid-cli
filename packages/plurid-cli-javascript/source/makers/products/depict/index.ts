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
const makeDepictCommand = (
    program: CommanderStatic,
) => {
    const depict = new program.Command('depict');

    depict
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .description('operate services on the plurid depict');


    return depict;
}
// #endregion module



// #region exports
export default makeDepictCommand;
// #endregion exports
