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
 * This sample demonstrates how to See [Certificate rotation](https://docs.microsoft.com/azure/aks/certificate-rotation) for more details about rotating managed cluster certificates.
 *
 * @summary See [Certificate rotation](https://docs.microsoft.com/azure/aks/certificate-rotation) for more details about rotating managed cluster certificates.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-03-01/examples/ManagedClustersRotateClusterCertificates.json
 */
async function rotateClusterCertificates() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.beginRotateClusterCertificatesAndWait(
    resourceGroupName,
    resourceName
  );
  console.log(result);
}

rotateClusterCertificates().catch(console.error);
