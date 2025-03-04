/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Quota } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureQuotaExtensionAPI } from "../azureQuotaExtensionAPI";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  CurrentQuotaLimitBase,
  QuotaListNextOptionalParams,
  QuotaListOptionalParams,
  QuotaGetOptionalParams,
  QuotaGetResponse,
  QuotaCreateOrUpdateOptionalParams,
  QuotaCreateOrUpdateResponse,
  QuotaUpdateOptionalParams,
  QuotaUpdateResponse,
  QuotaListResponse,
  QuotaListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Quota operations. */
export class QuotaImpl implements Quota {
  private readonly client: AzureQuotaExtensionAPI;

  /**
   * Initialize a new instance of the class Quota class.
   * @param client Reference to the service client
   */
  constructor(client: AzureQuotaExtensionAPI) {
    this.client = client;
  }

  /**
   * Get a list of current quota limits of all resources for the specified scope. The response from this
   * GET operation can be leveraged to submit requests to update a quota.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: QuotaListOptionalParams
  ): PagedAsyncIterableIterator<CurrentQuotaLimitBase> {
    const iter = this.listPagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(scope, options);
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    options?: QuotaListOptionalParams
  ): AsyncIterableIterator<CurrentQuotaLimitBase[]> {
    let result = await this._list(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    scope: string,
    options?: QuotaListOptionalParams
  ): AsyncIterableIterator<CurrentQuotaLimitBase> {
    for await (const page of this.listPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get the quota limit of a resource. The response can be used to determine the remaining quota to
   * calculate a new quota limit that can be submitted with a PUT request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    scope: string,
    options?: QuotaGetOptionalParams
  ): Promise<QuotaGetResponse> {
    return this.client.sendOperationRequest(
      { resourceName, scope, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the quota limit for the specified resource with the requested value. To update the
   * quota, follow these steps:
   * 1. Use the GET operation for quotas and usages to determine how much quota remains for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota request payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<QuotaCreateOrUpdateResponse>,
      QuotaCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<QuotaCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceName, scope, createQuotaRequest, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update the quota limit for the specified resource with the requested value. To update the
   * quota, follow these steps:
   * 1. Use the GET operation for quotas and usages to determine how much quota remains for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota request payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaCreateOrUpdateOptionalParams
  ): Promise<QuotaCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceName,
      scope,
      createQuotaRequest,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update the quota limit for a specific resource to the specified value:
   * 1. Use the Usages-GET and Quota-GET operations to determine the remaining quota for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota requests payload.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<QuotaUpdateResponse>, QuotaUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<QuotaUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceName, scope, createQuotaRequest, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the quota limit for a specific resource to the specified value:
   * 1. Use the Usages-GET and Quota-GET operations to determine the remaining quota for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota requests payload.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaUpdateOptionalParams
  ): Promise<QuotaUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceName,
      scope,
      createQuotaRequest,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a list of current quota limits of all resources for the specified scope. The response from this
   * GET operation can be leveraged to submit requests to update a quota.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    options?: QuotaListOptionalParams
  ): Promise<QuotaListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    nextLink: string,
    options?: QuotaListNextOptionalParams
  ): Promise<QuotaListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Quota/quotas/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CurrentQuotaLimitBase,
      headersMapper: Mappers.QuotaGetHeaders
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceName, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Quota/quotas/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    201: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    202: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    204: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  requestBody: Parameters.createQuotaRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceName, Parameters.scope],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Quota/quotas/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    201: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    202: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    204: {
      bodyMapper: Mappers.CurrentQuotaLimitBase
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  requestBody: Parameters.createQuotaRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceName, Parameters.scope],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Quota/quotas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaLimits,
      headersMapper: Mappers.QuotaListHeaders
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaLimits,
      headersMapper: Mappers.QuotaListNextHeaders
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
