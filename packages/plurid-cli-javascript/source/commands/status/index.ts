// #region imports
    // #region external
    import store from '#services/store';
    // #endregion external
// #endregion imports



// #region module
const statusCommand = async () => {
    const user = store.get('user');

    if (!user) {
        console.log('\n\tUser not authenticated. Run the \'authenticate\' command:');
        console.log('\n\t\tplurid authenticate\n');
        return;
    }

    console.log(`\n\tLogged in as ${user.username}.\n`);
}
// #endregion module



// #region exports
export default statusCommand;
// #endregion exports
