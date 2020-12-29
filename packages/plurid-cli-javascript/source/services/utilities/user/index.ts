// #region imports
    // #region external
    import store from '../../store';
    // #endregion external
// #endregion imports



// #region module
export const userLoggedIn = () => {
    return store.has('token') && store.has('refreshToken');
}
// #endregion module
