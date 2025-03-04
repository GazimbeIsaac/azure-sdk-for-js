/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreTracing from "@azure/core-tracing";
import { createSpan } from "./tracing";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { AnomalyDetectorContext } from "./anomalyDetectorContext";
import {
  AnomalyDetectorOptionalParams,
  ModelSnapshot,
  AnomalyDetectorListMultivariateModelNextOptionalParams,
  AnomalyDetectorListMultivariateModelOptionalParams,
  DetectRequest,
  AnomalyDetectorDetectEntireSeriesOptionalParams,
  AnomalyDetectorDetectEntireSeriesResponse,
  AnomalyDetectorDetectLastPointOptionalParams,
  AnomalyDetectorDetectLastPointResponse,
  DetectChangePointRequest,
  AnomalyDetectorDetectChangePointOptionalParams,
  AnomalyDetectorDetectChangePointResponse,
  ModelInfo,
  AnomalyDetectorTrainMultivariateModelOptionalParams,
  AnomalyDetectorTrainMultivariateModelResponse,
  AnomalyDetectorListMultivariateModelResponse,
  AnomalyDetectorGetMultivariateModelOptionalParams,
  AnomalyDetectorGetMultivariateModelResponse,
  AnomalyDetectorDeleteMultivariateModelOptionalParams,
  DetectionRequest,
  AnomalyDetectorDetectAnomalyOptionalParams,
  AnomalyDetectorDetectAnomalyResponse,
  AnomalyDetectorGetDetectionResultOptionalParams,
  AnomalyDetectorGetDetectionResultResponse,
  AnomalyDetectorExportModelOptionalParams,
  AnomalyDetectorExportModelResponse,
  LastDetectionRequest,
  AnomalyDetectorLastDetectAnomalyOptionalParams,
  AnomalyDetectorLastDetectAnomalyResponse,
  AnomalyDetectorListMultivariateModelNextResponse
} from "./models";

/// <reference lib="esnext.asynciterable" />
export class AnomalyDetector extends AnomalyDetectorContext {
  /**
   * Initializes a new instance of the AnomalyDetector class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus2.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: AnomalyDetectorOptionalParams) {
    super(endpoint, options);
  }

  /**
   * List models of a subscription
   * @param options The options parameters.
   */
  public listMultivariateModel(
    options?: AnomalyDetectorListMultivariateModelOptionalParams
  ): PagedAsyncIterableIterator<ModelSnapshot> {
    const iter = this.listMultivariateModelPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listMultivariateModelPagingPage(options);
      }
    };
  }

  private async *listMultivariateModelPagingPage(
    options?: AnomalyDetectorListMultivariateModelOptionalParams
  ): AsyncIterableIterator<ModelSnapshot[]> {
    let result = await this._listMultivariateModel(options);
    yield result.models || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listMultivariateModelNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.models || [];
    }
  }

  private async *listMultivariateModelPagingAll(
    options?: AnomalyDetectorListMultivariateModelOptionalParams
  ): AsyncIterableIterator<ModelSnapshot> {
    for await (const page of this.listMultivariateModelPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation generates a model with an entire series, each point is detected with the same model.
   * With this method, points before and after a certain point are used to determine whether it is an
   * anomaly. The entire detection can give user an overall status of the time series.
   * @param body Time series points and period if needed. Advanced model parameters can also be set in
   *             the request.
   * @param options The options parameters.
   */
  async detectEntireSeries(
    body: DetectRequest,
    options?: AnomalyDetectorDetectEntireSeriesOptionalParams
  ): Promise<AnomalyDetectorDetectEntireSeriesResponse> {
    const { span } = createSpan(
      "AnomalyDetector-detectEntireSeries",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        detectEntireSeriesOperationSpec
      );
      return result as AnomalyDetectorDetectEntireSeriesResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * This operation generates a model using points before the latest one. With this method, only
   * historical points are used to determine whether the target point is an anomaly. The latest point
   * detecting operation matches the scenario of real-time monitoring of business metrics.
   * @param body Time series points and period if needed. Advanced model parameters can also be set in
   *             the request.
   * @param options The options parameters.
   */
  async detectLastPoint(
    body: DetectRequest,
    options?: AnomalyDetectorDetectLastPointOptionalParams
  ): Promise<AnomalyDetectorDetectLastPointResponse> {
    const { span } = createSpan(
      "AnomalyDetector-detectLastPoint",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        detectLastPointOperationSpec
      );
      return result as AnomalyDetectorDetectLastPointResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Evaluate change point score of every series point
   * @param body Time series points and granularity is needed. Advanced model parameters can also be set
   *             in the request if needed.
   * @param options The options parameters.
   */
  async detectChangePoint(
    body: DetectChangePointRequest,
    options?: AnomalyDetectorDetectChangePointOptionalParams
  ): Promise<AnomalyDetectorDetectChangePointResponse> {
    const { span } = createSpan(
      "AnomalyDetector-detectChangePoint",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        detectChangePointOperationSpec
      );
      return result as AnomalyDetectorDetectChangePointResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Create and train a multivariate anomaly detection model. The request must include a source parameter
   * to indicate an externally accessible Azure storage Uri (preferably a Shared Access Signature Uri).
   * All time-series used in generate the model must be zipped into one single file. Each time-series
   * will be in a single CSV file in which the first column is timestamp and the second column is value.
   * @param body Training request
   * @param options The options parameters.
   */
  async trainMultivariateModel(
    body: ModelInfo,
    options?: AnomalyDetectorTrainMultivariateModelOptionalParams
  ): Promise<AnomalyDetectorTrainMultivariateModelResponse> {
    const { span } = createSpan(
      "AnomalyDetector-trainMultivariateModel",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        trainMultivariateModelOperationSpec
      );
      return result as AnomalyDetectorTrainMultivariateModelResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * List models of a subscription
   * @param options The options parameters.
   */
  private async _listMultivariateModel(
    options?: AnomalyDetectorListMultivariateModelOptionalParams
  ): Promise<AnomalyDetectorListMultivariateModelResponse> {
    const { span } = createSpan(
      "AnomalyDetector-_listMultivariateModel",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        listMultivariateModelOperationSpec
      );
      return result as AnomalyDetectorListMultivariateModelResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get detailed information of multivariate model, including the training status and variables used in
   * the model.
   * @param modelId Model identifier.
   * @param options The options parameters.
   */
  async getMultivariateModel(
    modelId: string,
    options?: AnomalyDetectorGetMultivariateModelOptionalParams
  ): Promise<AnomalyDetectorGetMultivariateModelResponse> {
    const { span } = createSpan(
      "AnomalyDetector-getMultivariateModel",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      modelId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        getMultivariateModelOperationSpec
      );
      return result as AnomalyDetectorGetMultivariateModelResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Delete an existing multivariate model according to the modelId
   * @param modelId Model identifier.
   * @param options The options parameters.
   */
  async deleteMultivariateModel(
    modelId: string,
    options?: AnomalyDetectorDeleteMultivariateModelOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const { span } = createSpan(
      "AnomalyDetector-deleteMultivariateModel",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      modelId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        deleteMultivariateModelOperationSpec
      );
      return result as coreHttp.RestResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Submit detection multivariate anomaly task with the trained model of modelId, the input schema
   * should be the same with the training request. Thus request will be complete asynchronously and will
   * return a resultId for querying the detection result.The request should be a source link to indicate
   * an externally accessible Azure storage Uri (preferably a Shared Access Signature Uri). All
   * time-series used in generate the model must be zipped into one single file. Each time-series will be
   * as follows: the first column is timestamp and the second column is value.
   * @param modelId Model identifier.
   * @param body Detect anomaly request
   * @param options The options parameters.
   */
  async detectAnomaly(
    modelId: string,
    body: DetectionRequest,
    options?: AnomalyDetectorDetectAnomalyOptionalParams
  ): Promise<AnomalyDetectorDetectAnomalyResponse> {
    const { span } = createSpan("AnomalyDetector-detectAnomaly", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      modelId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        detectAnomalyOperationSpec
      );
      return result as AnomalyDetectorDetectAnomalyResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get multivariate anomaly detection result based on resultId returned by the DetectAnomalyAsync api
   * @param resultId Result identifier.
   * @param options The options parameters.
   */
  async getDetectionResult(
    resultId: string,
    options?: AnomalyDetectorGetDetectionResultOptionalParams
  ): Promise<AnomalyDetectorGetDetectionResultResponse> {
    const { span } = createSpan(
      "AnomalyDetector-getDetectionResult",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      resultId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        getDetectionResultOperationSpec
      );
      return result as AnomalyDetectorGetDetectionResultResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Export multivariate anomaly detection model based on modelId
   * @param modelId Model identifier.
   * @param options The options parameters.
   */
  async exportModel(
    modelId: string,
    options?: AnomalyDetectorExportModelOptionalParams
  ): Promise<AnomalyDetectorExportModelResponse> {
    const { span } = createSpan("AnomalyDetector-exportModel", options || {});
    const operationArguments: coreHttp.OperationArguments = {
      modelId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        exportModelOperationSpec
      );
      return result as AnomalyDetectorExportModelResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Synchronized API for anomaly detection.
   * @param modelId Model identifier.
   * @param body Request for last detection.
   * @param options The options parameters.
   */
  async lastDetectAnomaly(
    modelId: string,
    body: LastDetectionRequest,
    options?: AnomalyDetectorLastDetectAnomalyOptionalParams
  ): Promise<AnomalyDetectorLastDetectAnomalyResponse> {
    const { span } = createSpan(
      "AnomalyDetector-lastDetectAnomaly",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      modelId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        lastDetectAnomalyOperationSpec
      );
      return result as AnomalyDetectorLastDetectAnomalyResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * ListMultivariateModelNext
   * @param nextLink The nextLink from the previous successful call to the ListMultivariateModel method.
   * @param options The options parameters.
   */
  private async _listMultivariateModelNext(
    nextLink: string,
    options?: AnomalyDetectorListMultivariateModelNextOptionalParams
  ): Promise<AnomalyDetectorListMultivariateModelNextResponse> {
    const { span } = createSpan(
      "AnomalyDetector-_listMultivariateModelNext",
      options || {}
    );
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    try {
      const result = await this.sendOperationRequest(
        operationArguments,
        listMultivariateModelNextOperationSpec
      );
      return result as AnomalyDetectorListMultivariateModelNextResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const detectEntireSeriesOperationSpec: coreHttp.OperationSpec = {
  path: "/timeseries/entire/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DetectEntireResponse
    },
    default: {
      bodyMapper: Mappers.AnomalyDetectorError,
      headersMapper: Mappers.AnomalyDetectorDetectEntireSeriesExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const detectLastPointOperationSpec: coreHttp.OperationSpec = {
  path: "/timeseries/last/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DetectLastPointResponse
    },
    default: {
      bodyMapper: Mappers.AnomalyDetectorError,
      headersMapper: Mappers.AnomalyDetectorDetectLastPointExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const detectChangePointOperationSpec: coreHttp.OperationSpec = {
  path: "/timeseries/changepoint/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DetectChangePointResponse
    },
    default: {
      bodyMapper: Mappers.AnomalyDetectorError,
      headersMapper: Mappers.AnomalyDetectorDetectChangePointExceptionHeaders
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const trainMultivariateModelOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/models",
  httpMethod: "POST",
  responses: {
    201: {
      headersMapper: Mappers.AnomalyDetectorTrainMultivariateModelHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorTrainMultivariateModelExceptionHeaders
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listMultivariateModelOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/models",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorListMultivariateModelExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultivariateModelOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/models/{modelId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Model
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.AnomalyDetectorGetMultivariateModelExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteMultivariateModelOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/models/{modelId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorDeleteMultivariateModelExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const detectAnomalyOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/models/{modelId}/detect",
  httpMethod: "POST",
  responses: {
    201: {
      headersMapper: Mappers.AnomalyDetectorDetectAnomalyHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.AnomalyDetectorDetectAnomalyExceptionHeaders
    }
  },
  requestBody: Parameters.body3,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getDetectionResultOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/results/{resultId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DetectionResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.AnomalyDetectorGetDetectionResultExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.resultId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const exportModelOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/models/{modelId}/export",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.AnomalyDetectorExportModelExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const lastDetectAnomalyOperationSpec: coreHttp.OperationSpec = {
  path: "/multivariate/models/{modelId}/last/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LastDetectionResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.AnomalyDetectorLastDetectAnomalyExceptionHeaders
    }
  },
  requestBody: Parameters.body4,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listMultivariateModelNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorListMultivariateModelNextExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
