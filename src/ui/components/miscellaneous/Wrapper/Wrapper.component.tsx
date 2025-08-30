import { PropsWithChildren } from "react";

import { useWrapper } from "./use-wrapper.hook";

import "./Wrapper.styles.css";

export const CalstackVideoWrapper = ({ children }: PropsWithChildren) => {
    const {
        isHovering,
        isPlaying,
        wrapperRef,
        onMouseEnter,
        onMouseMove,
        onMouseLeave,
    } = useWrapper();

    return (
        <div
            className="calstack-video-wrapper"
            data-hovering={isHovering}
            data-paused={!isPlaying}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            ref={wrapperRef}
        >
            {children}
        </div>
    );
};
