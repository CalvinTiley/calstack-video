import { useCallback } from "react";
import { useVideoContext } from "~contexts";

export const useFullscreenControl = () => {
    const { isFullscreen, setIsFullscreen, wrapperRef } = useVideoContext();

    const onToggleFullscreen = useCallback(() => {
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

    return {
        isFullscreen,
        onToggleFullscreen,
    };
};
