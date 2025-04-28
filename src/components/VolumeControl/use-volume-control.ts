import { useCallback } from "react";
import { useVideoContext } from "~contexts";

export const useVolumeControl = () => {
    const {
        videoRef,
        isMuted,
        volume,
        volumeBeforeMute,
        setVolume,
        setVolumeBeforeMute,
    } = useVideoContext();

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            if (isMuted) {
                setVolume(volumeBeforeMute ? volumeBeforeMute : 1);
            } else {
                setVolumeBeforeMute(videoRef.current.volume);
                setVolume(0);
            }
            videoRef.current[isMuted ? "pause" : "play"]();
        }
    }, [isMuted, setVolume, setVolumeBeforeMute, volumeBeforeMute, videoRef]);

    const onSliderChange = (value: number) => {
        if (videoRef.current) {
            const normalisedValue = Math.min(Math.max(value / 100, 0), 1);

            setVolume(normalisedValue);
        }
    };

    return {
        isMuted,
        onSliderChange,
        volume,
        toggleMute,
    };
};
