/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RecoveryServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesClient } from "../recoveryServicesClient";
import {
  CheckNameAvailabilityParameters,
  RecoveryServicesCheckNameAvailabilityOptionalParams,
  RecoveryServicesCheckNameAvailabilityResponse
} from "../models";

/** Class containing RecoveryServices operations. */
export class RecoveryServicesImpl implements RecoveryServices {
  private readonly client: RecoveryServicesClient;

  /**
   * Initialize a new instance of the class RecoveryServices class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesClient) {
    this.client = client;
  }

  /**
   * API to check for resource name availability.
   * A name is available if no other resource exists that has the same SubscriptionId, Resource Name and
   * Type
   * or if one or more such resources exist, each of these must be GC'd and their time of deletion be
   * more than 24 Hours Ago
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param location Location of the resource
   * @param input Contains information about Resource type and Resource name
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    location: string,
    input: CheckNameAvailabilityParameters,
    options?: RecoveryServicesCheckNameAvailabilityOptionalParams
  ): Promise<RecoveryServicesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, location, input, options },
      checkNameAvailabilityOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.input,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
