import { isObject } from "~utilities";

export const isVideoElement = (element: unknown): element is HTMLVideoElement =>
    !!element &&
    isObject(element) &&
    typeof (element as { play: () => void }).play === "function";
