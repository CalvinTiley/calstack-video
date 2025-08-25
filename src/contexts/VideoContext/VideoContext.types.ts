import type { Dispatch, RefObject, SetStateAction } from "react";

export interface IVideoContext {
    videoRef: RefObject<HTMLVideoElement>;
    wrapperRef: RefObject<HTMLDivElement>;
    isHovering: boolean;
    setIsHovering: Dispatch<SetStateAction<boolean>>;
}
