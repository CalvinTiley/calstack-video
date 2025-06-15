import { HTMLAttributes, VideoHTMLAttributes } from "react";

export interface IVideoElement extends VideoHTMLAttributes<HTMLVideoElement> {
    preventSeek?: boolean;
}

export interface ICalstackVideo extends IVideoElement {
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
}
