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
const makeProductsCommand = (
    program: CommanderStatic,
) => {
    const products = new program.Command('products');

    products
        .storeOptionsAsProperties(false)
        .passCommandToAction(false)
        .description('operate products on the plurid machine');


    return products;
}
// #endregion module



// #region exports
export default makeProductsCommand;
// #endregion exports
