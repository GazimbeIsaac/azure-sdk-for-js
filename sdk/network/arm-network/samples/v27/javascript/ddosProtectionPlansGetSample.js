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
 * This sample demonstrates how to Gets information about the specified DDoS protection plan.
 *
 * @summary Gets information about the specified DDoS protection plan.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/DdosProtectionPlanGet.json
 */
async function getDDoSProtectionPlan() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const ddosProtectionPlanName = "test-plan";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ddosProtectionPlans.get(resourceGroupName, ddosProtectionPlanName);
  console.log(result);
}

getDDoSProtectionPlan().catch(console.error);
