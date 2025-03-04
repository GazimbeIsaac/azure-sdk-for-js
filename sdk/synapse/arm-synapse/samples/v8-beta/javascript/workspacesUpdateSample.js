/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a workspace
 *
 * @summary Updates a workspace
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/UpdateWorkspace.json
 */
async function updateAWorkspace() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "resourceGroup1";
  const workspaceName = "workspace1";
  const workspacePatchInfo = {
    encryption: {
      cmk: {
        key: {
          name: "default",
          keyVaultUrl: "https://vault.azure.net/keys/key1",
        },
      },
    },
    identity: { type: "SystemAssigned" },
    managedVirtualNetworkSettings: {
      allowedAadTenantIdsForLinking: ["740239CE-A25B-485B-86A0-262F29F6EBDB"],
      linkedAccessCheckOnTargetResource: false,
      preventDataExfiltration: false,
    },
    publicNetworkAccess: "Enabled",
    purviewConfiguration: {
      purviewResourceId:
        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/resourceGroup1/providers/Microsoft.ProjectPurview/accounts/accountname1",
    },
    sqlAdministratorLoginPassword: "password",
    tags: { key: "value" },
    workspaceRepositoryConfiguration: {
      type: "FactoryGitHubConfiguration",
      accountName: "adifferentacount",
      collaborationBranch: "master",
      hostName: "",
      projectName: "myproject",
      repositoryName: "myrepository",
      rootFolder: "/",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.workspaces.beginUpdateAndWait(
    resourceGroupName,
    workspaceName,
    workspacePatchInfo
  );
  console.log(result);
}

updateAWorkspace().catch(console.error);
