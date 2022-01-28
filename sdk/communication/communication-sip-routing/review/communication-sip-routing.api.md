## API Report File for "@azure/communication-sip-routing"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreHttp from '@azure/core-http';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure/core-http';
import { PipelineOptions } from '@azure/core-http';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface CommunicationError {
    code: string;
    readonly details?: CommunicationError[];
    readonly innerError?: CommunicationError;
    message: string;
    readonly target?: string;
}

// @public
export type GetSipConfigurationResponse = SipConfiguration & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: SipConfiguration;
    };
};

// @public
export interface OptionalParams extends coreHttp.ServiceClientOptions {
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface PatchSipConfigurationOptionalParams extends coreHttp.OperationOptions {
    body?: SipConfigurationPatch;
}

// @public
export type PatchSipConfigurationResponse = SipConfiguration & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: SipConfiguration;
    };
};

// @public
export interface SipConfiguration {
    routes?: TrunkRoute[];
    trunks?: {
        [propertyName: string]: Trunk;
    };
}

// @public (undocumented)
export interface SipConfigurationOptions extends OperationOptions {
}

// @public
export interface SipConfigurationPatch {
    routes?: TrunkRoute[];
    trunks?: {
        [propertyName: string]: TrunkPatch | null;
    };
}

// @public (undocumented)
export class SipRoutingClient {
    constructor(connectionString: string, options?: SipRoutingClientOptions);
    constructor(endpoint: string, credential: KeyCredential, options?: SipRoutingClientOptions);
    constructor(endpoint: string, credential: TokenCredential, options?: SipRoutingClientOptions);
    getSipConfiguration(options?: SipConfigurationOptions): Promise<GetSipConfigurationResponse>;
    updateSipConfiguration(request?: SipConfigurationPatch, options?: OperationOptions): Promise<PatchSipConfigurationResponse>;
}

// @public
export interface SipRoutingClientOptions extends PipelineOptions {
}

// @public
export interface Trunk {
    sipSignalingPort: number;
}

// @public
export interface TrunkPatch {
    sipSignalingPort?: number;
}

// @public
export interface TrunkRoute {
    description?: string;
    name: string;
    numberPattern: string;
    trunks?: string[];
}


// (No @packageDocumentation comment for this package)

```