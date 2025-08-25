import { useCallback, useEffect, useState } from "react";

import { useMediaContext, useVideoContext } from "~contexts";
import {
    useDebouncedCallback,
    useDoubleClick,
    useToggleFullscreen,
} from "~hooks";

export const useOverlay = () => {
    const { videoRef } = useVideoContext();
    const { isPlaying, isStalling } = useMediaContext();
    const toggleFullscreen = useToggleFullscreen();

    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

    const debouncedHideFeedback = useDebouncedCallback(() => {
        setIsFeedbackVisible(false);
    }, 800);

    useEffect(() => {
        setIsFeedbackVisible(true);
        debouncedHideFeedback();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- adding debouncedHideFeedback causes infinite loop
    }, [isPlaying]);

    const onOverlaySingleClick = useCallback(() => {
        if (videoRef.current) {
            videoRef.current[isPlaying ? "pause" : "play"]();
        }
    }, [isPlaying, videoRef]);

    const onOverlayClick = useDoubleClick(
        toggleFullscreen,
        onOverlaySingleClick,
    );

    return {
        isFeedbackVisible,
        isStalling,
        onOverlayClick,
    };
};
