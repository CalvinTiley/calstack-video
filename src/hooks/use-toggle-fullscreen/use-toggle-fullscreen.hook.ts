import { useCallback } from "react";
import { useVideoContext } from "~contexts";

export const useToggleFullscreen = () => {
    const { setIsFullscreen, wrapperRef } = useVideoContext();

    const toggleFullscreen = useCallback(() => {
        if (wrapperRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
                setIsFullscreen(false);
            } else {
                wrapperRef.current.requestFullscreen();
                setIsFullscreen(true);
            }
        }
    }, [setIsFullscreen, wrapperRef]);

    return toggleFullscreen;
};
