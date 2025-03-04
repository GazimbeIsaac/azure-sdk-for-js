/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a volume group along with specified volumes
 *
 * @summary Create a volume group along with specified volumes
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2021-10-01/examples/VolumeGroups_Create.json
 */
async function volumeGroupsCreate() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const volumeGroupName = "group1";
  const body = {
    groupMetaData: {
      applicationIdentifier: "DEV",
      applicationType: "SAP-HANA",
      deploymentSpecId: "fb04dbeb-005d-2703-197e-6208dfadb5d9",
      groupDescription: "Volume group",
    },
    location: "westus",
    volumes: [
      {
        name: "testVol1",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "testVol1",
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "data",
      },
      {
        name: "testVol2",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "testVol2",
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "log",
      },
      {
        name: "testVol3",
        capacityPoolResourceId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1",
        creationToken: "testVol3",
        proximityPlacementGroup:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg",
        serviceLevel: "Premium",
        subnetId:
          "/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3",
        throughputMibps: 10,
        usageThreshold: 107374182400,
        volumeSpecName: "shared",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumeGroups.beginCreateAndWait(
    resourceGroupName,
    accountName,
    volumeGroupName,
    body
  );
  console.log(result);
}

volumeGroupsCreate().catch(console.error);
