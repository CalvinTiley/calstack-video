import type {
    Dispatch,
    PropsWithChildren,
    RefObject,
    SetStateAction,
} from "react";

export interface IVideoContext {
    videoRef: RefObject<HTMLVideoElement>;
    wrapperRef: RefObject<HTMLDivElement>;
    isHovering: boolean;
    setIsHovering: Dispatch<SetStateAction<boolean>>;
    src: string;
    setSrc: Dispatch<SetStateAction<string>>;
}

export type IVideoProvider = PropsWithChildren<{ src: string }>;
