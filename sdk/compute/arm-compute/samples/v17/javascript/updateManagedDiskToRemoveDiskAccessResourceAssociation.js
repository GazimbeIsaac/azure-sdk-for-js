/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-08-01/examples/UpdateAManagedDiskToRemoveDiskAccess.json
 */
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

async function updateManagedDiskToRemoveDiskAccessResourceAssociation() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk = { networkAccessPolicy: "AllowAll" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginUpdateAndWait(resourceGroupName, diskName, disk);
  console.log(result);
}

updateManagedDiskToRemoveDiskAccessResourceAssociation().catch(console.error);
