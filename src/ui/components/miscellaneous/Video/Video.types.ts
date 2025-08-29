import type { VideoHTMLAttributes } from "react";

export interface ICalstackVideoVideo
    extends VideoHTMLAttributes<HTMLVideoElement> {
    preventSeek?: boolean;
}
