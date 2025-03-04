/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates the specified ExpressRoutePort resource.
 *
 * @summary Creates or updates the specified ExpressRoutePort resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRoutePortCreate.json
 */
async function expressRoutePortCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const expressRoutePortName = "portName";
  const parameters = {
    bandwidthInGbps: 100,
    encapsulation: "QinQ",
    location: "westus",
    peeringLocation: "peeringLocationName",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRoutePorts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    expressRoutePortName,
    parameters
  );
  console.log(result);
}

expressRoutePortCreate().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates the specified ExpressRoutePort resource.
 *
 * @summary Creates or updates the specified ExpressRoutePort resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRoutePortUpdateLink.json
 */
async function expressRoutePortUpdateLink() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const expressRoutePortName = "portName";
  const parameters = {
    bandwidthInGbps: 100,
    encapsulation: "QinQ",
    links: [{ name: "link1", adminState: "Enabled" }],
    location: "westus",
    peeringLocation: "peeringLocationName",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRoutePorts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    expressRoutePortName,
    parameters
  );
  console.log(result);
}

expressRoutePortUpdateLink().catch(console.error);
