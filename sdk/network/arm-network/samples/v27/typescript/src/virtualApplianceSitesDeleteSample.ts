/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified site from a Virtual Appliance.
 *
 * @summary Deletes the specified site from a Virtual Appliance.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/NetworkVirtualApplianceSiteDelete.json
 */
async function deleteNetworkVirtualApplianceSite() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const networkVirtualApplianceName = "nva";
  const siteName = "site1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualApplianceSites.beginDeleteAndWait(
    resourceGroupName,
    networkVirtualApplianceName,
    siteName
  );
  console.log(result);
}

deleteNetworkVirtualApplianceSite().catch(console.error);
