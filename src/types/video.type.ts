import { HTMLAttributes, VideoHTMLAttributes } from "react";

export interface ICalstackVideoElement
    extends VideoHTMLAttributes<HTMLVideoElement> {
    preventSeek?: boolean;
}

export interface ICalstackVideo extends ICalstackVideoElement {
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
}
