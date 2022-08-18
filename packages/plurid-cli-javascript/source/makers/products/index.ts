// #region imports
    // #region libraries
    import {
        Command,
    } from 'commander';
    // #endregion libraries


    // #region external
    // import {
    // } from '../../commands';
    // #endregion external


    // #region internal
    import makeDepictCommand from './depict';
    // #endregion internal
// #endregion imports



// #region module
const makeProductsCommand = (
    program: Command,
) => {
    const products = program.createCommand('products');

    products
        .storeOptionsAsProperties(false)
        .description('operate products on the plurid machine');


    products.addCommand(
        makeDepictCommand(program),
    );


    return products;
}
// #endregion module



// #region exports
export default makeProductsCommand;
// #endregion exports
