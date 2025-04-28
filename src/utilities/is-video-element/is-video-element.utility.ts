import { isObject } from "../is-object";

export const isVideoElement = (element: unknown): element is HTMLVideoElement =>
    Boolean(element) && isObject(element) && "play" in element;
