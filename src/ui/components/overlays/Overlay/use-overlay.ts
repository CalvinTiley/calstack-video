import { useCallback, useEffect, useState } from "react";

import { useMediaContext } from "~contexts";
import {
    useDebouncedCallback,
    useDoubleClick,
    useToggleFullscreen,
    useTogglePlay,
} from "~hooks";

import { ICalstackVideoOverlay } from "./Overlay.types";

export const useCalstackVideoOverlay = ({
    options,
}: Pick<ICalstackVideoOverlay, "options">) => {
    const { isStalling } = useMediaContext();
    const toggleFullscreen = useToggleFullscreen();
    const { togglePlay, isPlaying } = useTogglePlay();

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
        if (!options?.disableTogglePlayOnClick) {
            togglePlay();
        }
    }, [options?.disableTogglePlayOnClick, isPlaying]);

    const onOverlayClick = useDoubleClick(
        options?.disableFullscreenOnDoubleClick ? () => {} : toggleFullscreen,
        onOverlaySingleClick,
    );

    return {
        isFeedbackVisible,
        isStalling,
        onOverlayClick,
    };
};
