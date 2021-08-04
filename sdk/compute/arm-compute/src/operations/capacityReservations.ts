/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/capacityReservationsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a CapacityReservations. */
export class CapacityReservations {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a CapacityReservations.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to create or update a capacity reservation. Please note some properties can be set
   * only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation
   * for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Create capacity reservation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, parameters: Models.CapacityReservation, options?: msRest.RequestOptionsBase): Promise<Models.CapacityReservationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,capacityReservationGroupName,capacityReservationName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CapacityReservationsCreateOrUpdateResponse>;
  }

  /**
   * The operation to update a capacity reservation.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Update capacity reservation operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationsUpdateResponse>
   */
  update(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, parameters: Models.CapacityReservationUpdate, options?: msRest.RequestOptionsBase): Promise<Models.CapacityReservationsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,capacityReservationGroupName,capacityReservationName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CapacityReservationsUpdateResponse>;
  }

  /**
   * The operation to delete a capacity reservation. This operation is allowed only when all the
   * associated resources are disassociated from the capacity reservation. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,capacityReservationGroupName,capacityReservationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation that retrieves information about the capacity reservation.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationsGetResponse>
   */
  get(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, options?: Models.CapacityReservationsGetOptionalParams): Promise<Models.CapacityReservationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param callback The callback
   */
  get(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, callback: msRest.ServiceCallback<Models.CapacityReservation>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, options: Models.CapacityReservationsGetOptionalParams, callback: msRest.ServiceCallback<Models.CapacityReservation>): void;
  get(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, options?: Models.CapacityReservationsGetOptionalParams | msRest.ServiceCallback<Models.CapacityReservation>, callback?: msRest.ServiceCallback<Models.CapacityReservation>): Promise<Models.CapacityReservationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CapacityReservationsGetResponse>;
  }

  /**
   * Lists all of the capacity reservations in the specified capacity reservation group. Use the
   * nextLink property in the response to get the next page of capacity reservations.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationsListByCapacityReservationGroupResponse>
   */
  listByCapacityReservationGroup(resourceGroupName: string, capacityReservationGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.CapacityReservationsListByCapacityReservationGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param callback The callback
   */
  listByCapacityReservationGroup(resourceGroupName: string, capacityReservationGroupName: string, callback: msRest.ServiceCallback<Models.CapacityReservationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCapacityReservationGroup(resourceGroupName: string, capacityReservationGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapacityReservationListResult>): void;
  listByCapacityReservationGroup(resourceGroupName: string, capacityReservationGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapacityReservationListResult>, callback?: msRest.ServiceCallback<Models.CapacityReservationListResult>): Promise<Models.CapacityReservationsListByCapacityReservationGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        options
      },
      listByCapacityReservationGroupOperationSpec,
      callback) as Promise<Models.CapacityReservationsListByCapacityReservationGroupResponse>;
  }

  /**
   * The operation to create or update a capacity reservation. Please note some properties can be set
   * only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation
   * for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Create capacity reservation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, parameters: Models.CapacityReservation, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * The operation to update a capacity reservation.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Update capacity reservation operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, parameters: Models.CapacityReservationUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * The operation to delete a capacity reservation. This operation is allowed only when all the
   * associated resources are disassociated from the capacity reservation. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, capacityReservationGroupName: string, capacityReservationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the capacity reservations in the specified capacity reservation group. Use the
   * nextLink property in the response to get the next page of capacity reservations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapacityReservationsListByCapacityReservationGroupNextResponse>
   */
  listByCapacityReservationGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CapacityReservationsListByCapacityReservationGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByCapacityReservationGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CapacityReservationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCapacityReservationGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapacityReservationListResult>): void;
  listByCapacityReservationGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapacityReservationListResult>, callback?: msRest.ServiceCallback<Models.CapacityReservationListResult>): Promise<Models.CapacityReservationsListByCapacityReservationGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByCapacityReservationGroupNextOperationSpec,
      callback) as Promise<Models.CapacityReservationsListByCapacityReservationGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand0,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByCapacityReservationGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CapacityReservation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservation
    },
    201: {
      bodyMapper: Mappers.CapacityReservation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CapacityReservationUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservation
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByCapacityReservationGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};