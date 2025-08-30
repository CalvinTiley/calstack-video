import { useCallback } from "react";

import { useMediaContext, useVideoContext } from "~contexts";
import { useDebouncedCallback } from "~hooks";

export const useWrapper = () => {
    const { isHovering, setIsHovering, wrapperRef } = useVideoContext();
    const { isPlaying } = useMediaContext();

    const debouncedSetIsHovering = useDebouncedCallback((value: boolean) => {
        setIsHovering(value);
    }, 2000);

    const onMouseEnter = useCallback(
        () => setIsHovering(true),
        [setIsHovering],
    );

    const onMouseMove = useCallback(() => {
        setIsHovering(true);
        debouncedSetIsHovering(false);
    }, [setIsHovering, debouncedSetIsHovering]);

    const onMouseLeave = useCallback(() => {
        setIsHovering(false);
    }, [setIsHovering]);

    return {
        isHovering,
        isPlaying,
        onMouseEnter,
        onMouseLeave,
        onMouseMove,
        wrapperRef,
    };
};
