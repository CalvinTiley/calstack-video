import { useMemo } from "react";
import { useVideoContext } from "~contexts";

export const useProgressBar = () => {
    const { currentTime, duration, videoRef } = useVideoContext();

    const progress = useMemo(() => {
        if (!duration) return 0;

        return (currentTime / duration) * 100;
    }, [currentTime, duration]);

    const onMouseDown = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const onMouseUp = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const onChange = (value: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = (value / 100) * duration;
        }
    };

    return {
        onChange,
        onMouseDown,
        onMouseUp,
        progress,
    };
};
