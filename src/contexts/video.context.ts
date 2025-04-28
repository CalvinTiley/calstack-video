import {
    createContext,
    Dispatch,
    RefObject,
    SetStateAction,
    useContext,
} from "react";

interface IVideoContext {
    currentTime: number;
    duration: number;
    isFullscreen: boolean;
    isHovering: boolean;
    isMuted: boolean;
    isPlaying: boolean;
    isStalling: boolean;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    setDuration: Dispatch<SetStateAction<number>>;
    setIsFullscreen: Dispatch<SetStateAction<boolean>>;
    setIsHovering: Dispatch<SetStateAction<boolean>>;
    setIsMuted: Dispatch<SetStateAction<boolean>>;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    setIsStalling: Dispatch<SetStateAction<boolean>>;
    setVolume: Dispatch<SetStateAction<number>>;
    setVolumeBeforeMute: Dispatch<SetStateAction<number>>;
    volume: number;
    volumeBeforeMute: number;
    videoRef: RefObject<HTMLVideoElement>;
    wrapperRef: RefObject<HTMLDivElement>;
}

export const VideoContext = createContext<IVideoContext | null>(null);

export const useVideoContext = () => {
    const ctx = useContext(VideoContext);

    if (!ctx) {
        throw new Error(
            "useVideoContext must be used within a <VideoProvider>",
        );
    }

    return ctx;
};
