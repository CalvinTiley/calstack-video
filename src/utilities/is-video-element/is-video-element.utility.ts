import { isObject } from "../is-object";

export const isVideoElement = (element: unknown): element is HTMLVideoElement =>
    !!element &&
    isObject(element) &&
    typeof (element as { play: () => void }).play === "function";
