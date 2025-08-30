import { PropsWithChildren } from "react";

export type HlsConstructor = (typeof import("hls.js"))["default"];

export type HlsInstance = InstanceType<HlsConstructor>;

export interface IQualityLevel {
    index: number;
    height?: number;
    bitrate?: number;
    name?: string;
}

export interface IHLSContext {
    hls: any | null;
    qualities: {
        index: number;
        height?: number;
        bitrate?: number;
        name?: string;
    }[];
    currentQuality: number;
    setQuality: (idx: number) => void;
    isHlsActive: boolean;
}

export interface IHLSProvider extends PropsWithChildren {
    isLive?: boolean;
}
