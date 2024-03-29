// #region imports
    // #region libraries
    import {
        gql,
    } from '@apollo/client/core';
    // #endregion libraries
// #endregion imports



// #region module
export const GET_ACCESS_CODE_TOKENS = gql`
    query GetAccessCodeTokens($input: InputValueString!) {
        getAccessCodeTokens(input: $input) {
            status
            errors {
                path
                type
                message
            }
            data {
                owner {
                    identonym
                }
                token
                refreshToken
            }
        }
    }
`;


export const APP_CHECK_AVAILABLE_APP_NAME = gql`
    query AppCheckAvailableAppName($input: InputValueString!) {
        appCheckAvailableAppName(input: $input) {
            status
            errors {
                path
                type
                message
            }
            data {
                value
            }
        }
    }
`;
// #endregion module
