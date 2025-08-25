import { Dispatch, SetStateAction } from "react";

export interface IMediaContext {
    currentTime: number;
    duration: number;
    isFullscreen: boolean;
    isMuted: boolean;
    isPlaying: boolean;
    isStalling: boolean;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    setDuration: Dispatch<SetStateAction<number>>;
    setIsFullscreen: Dispatch<SetStateAction<boolean>>;
    setIsMuted: Dispatch<SetStateAction<boolean>>;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    setIsStalling: Dispatch<SetStateAction<boolean>>;
    setVolume: Dispatch<SetStateAction<number>>;
    setVolumeBeforeMute: Dispatch<SetStateAction<number>>;
    volume: number;
    volumeBeforeMute: number;
}
