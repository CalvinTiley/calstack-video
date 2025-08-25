import { useCallback } from "react";

import { useMediaContext, useVideoContext } from "~contexts";

export const useVolumeControl = () => {
    const { videoRef } = useVideoContext();
    const { isMuted, volume, setVolume } = useMediaContext();

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
    }, [isMuted, videoRef]);

    const onSliderChange = (value: number) => {
        if (videoRef.current) {
            const normalisedValue = Math.min(Math.max(value / 100, 0), 1);

            setVolume(normalisedValue);
        }
    };

    return {
        isMuted,
        onSliderChange,
        toggleMute,
        volume: isMuted ? 0 : volume * 100,
    };
};
