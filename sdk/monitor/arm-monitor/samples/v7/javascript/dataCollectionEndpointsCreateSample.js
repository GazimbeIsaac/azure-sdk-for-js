/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a data collection endpoint.
 *
 * @summary Creates or updates a data collection endpoint.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2021-04-01/examples/DataCollectionEndpointsCreate.json
 */
async function createOrUpdateDataCollectionEndpoint() {
  const subscriptionId = "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const resourceGroupName = "myResourceGroup";
  const dataCollectionEndpointName = "myCollectionEndpoint";
  const body = {
    location: "eastus",
    networkAcls: { publicNetworkAccess: "Enabled" },
  };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.dataCollectionEndpoints.create(
    resourceGroupName,
    dataCollectionEndpointName,
    options
  );
  console.log(result);
}

createOrUpdateDataCollectionEndpoint().catch(console.error);
