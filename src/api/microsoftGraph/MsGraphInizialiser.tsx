import { Client } from '@microsoft/microsoft-graph-client';
import { AccountInfo } from "@azure/msal-common";
import { IPublicClientApplication } from "@azure/msal-browser";
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';

interface GraphClientOptions {
    instance: IPublicClientApplication;
    accounts: AccountInfo[];
}

export const initializeGraphClient = ({ instance, accounts }: GraphClientOptions): Client => {

    // Get the currently signed-in account
    const activeAccount = accounts[0];

    // Check if there is a signed-in account
    if (!activeAccount) {
        throw new Error('No signed-in account found');
    }

    // Initialize Microsoft Graph client
    const graphClient = Client.init({
        authProvider: async (done) => {
            // Get the token from the auth provider
            const token = await instance.acquireTokenSilent({
                account: activeAccount,
                scopes: loginRequest.scopes,
            });

            if (token) {
                // Callback to attach token to request
                done(null, token.accessToken);
            } else {
                done('Could not get token', null);
            }
        },
    });


    return graphClient;
};