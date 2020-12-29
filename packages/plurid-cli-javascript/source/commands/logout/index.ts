// #region imports
    // #region external
    import store from '#services/store';
    // #endregion external
// #endregion imports



// #region module
const logoutCommand = async () => {
    const owner = store.get('owner');

    if (!owner) {
        console.log(`\n\tNo owner logged in. Run the 'authenticate' command:`);
        console.log('\n\t\tplurid authenticate\n');
        return;
    }

    store.delete('owner');
    store.delete('token');
    store.delete('refreshToken');

    console.log(`\n\tLogged out from owner ${owner.identonym}.\n`);
}
// #endregion module



// #region exports
export default logoutCommand;
// #endregion exports
