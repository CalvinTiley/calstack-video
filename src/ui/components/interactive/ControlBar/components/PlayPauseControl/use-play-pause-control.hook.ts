import { useCallback } from "react";

import { useMediaContext, useVideoContext } from "~contexts";

export const usePlayPauseControl = () => {
    const { videoRef } = useVideoContext();
    const { isPlaying } = useMediaContext();

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
