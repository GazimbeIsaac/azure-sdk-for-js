/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the private link service ID for the specified managed cluster.
 *
 * @summary Gets the private link service ID for the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-02-01/examples/ResolvePrivateLinkServiceId.json
 */
async function resolveThePrivateLinkServiceIdForManagedCluster() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const parameters = { name: "management" };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.resolvePrivateLinkServiceId.post(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

resolveThePrivateLinkServiceIdForManagedCluster().catch(console.error);
