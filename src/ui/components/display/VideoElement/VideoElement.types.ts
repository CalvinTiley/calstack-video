import type { VideoHTMLAttributes } from "react";

export interface IVideoElement extends VideoHTMLAttributes<HTMLVideoElement> {
    preventSeek?: boolean;
}
