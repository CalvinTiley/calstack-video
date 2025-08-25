import { useCallback } from "react";

import { useMediaContext, useVideoContext } from "~contexts";

export const useToggleFullscreen = () => {
    const { wrapperRef } = useVideoContext();
    const { setIsFullscreen } = useMediaContext();

    const toggleFullscreen = useCallback(async () => {
        if (wrapperRef.current) {
            try {
                if (document.fullscreenElement) {
                    await document.exitFullscreen();
                    setIsFullscreen(false);
                } else {
                    wrapperRef.current.requestFullscreen();
                    setIsFullscreen(true);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }, [setIsFullscreen, wrapperRef]);

    return toggleFullscreen;
};
