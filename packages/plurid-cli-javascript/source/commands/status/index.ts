// #region imports
    // #region external
    import store from '#services/store';
    // #endregion external
// #endregion imports



// #region module
const statusCommand = async () => {
    const owner = store.get('owner');

    if (!owner) {
        console.log('\n\tOwner not authenticated. Run the \'authenticate\' command:');
        console.log('\n\t\tplurid authenticate\n');
        return;
    }

    console.log(`\n\tLogged in as ${owner.identonym}.\n`);
}
// #endregion module



// #region exports
export default statusCommand;
// #endregion exports
