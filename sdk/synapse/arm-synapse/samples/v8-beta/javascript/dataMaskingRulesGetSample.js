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
 * This sample demonstrates how to Gets the specific Sql pool data masking rule.
 *
 * @summary Gets the specific Sql pool data masking rule.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingRuleGet.json
 */
async function getDataMaskingRule() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const dataMaskingRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingRules.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    dataMaskingRuleName
  );
  console.log(result);
}

getDataMaskingRule().catch(console.error);
