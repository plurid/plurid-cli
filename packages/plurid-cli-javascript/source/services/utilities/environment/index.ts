// #region module
const ENV_MODE = process.env.ENV_MODE || '';

const environments: any = {
    production: 'production',
    development: 'development',
    local: 'local',
    localExternal: 'localExternal',
};

const environment = {
    production: environments[ENV_MODE] === 'production',
    development: environments[ENV_MODE] === 'development',
    local: environments[ENV_MODE] === 'local',
    localExternal: environments[ENV_MODE] === 'localexternal',
};
// #endregion module



// #region exports
export default environment;
// #endregion exports
