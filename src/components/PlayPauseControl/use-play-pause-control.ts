import { useCallback } from "react";
import { useVideoContext } from "~contexts";

export const usePlayPauseControl = () => {
    const { videoRef, isPlaying } = useVideoContext();

    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            videoRef.current[isPlaying ? "pause" : "play"]();
        }
    }, [isPlaying, videoRef]);

    return {
        isPlaying,
        togglePlay,
    };
};
