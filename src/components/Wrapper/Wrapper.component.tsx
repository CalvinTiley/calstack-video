import { VideoElement, ConditionalVisible, ControlBar } from "~components";

import { ICalstackVideo } from "~types/video.type";
import { useWrapper } from "./use-wrapper.hook";

import { Overlay } from "../Overlay";

import "./Wrapper.styles.css";

export const Wrapper = ({ controls, ...props }: ICalstackVideo) => {
    const { isHovering, wrapperRef, onMouseEnter, onMouseMove, onMouseLeave } =
        useWrapper();

    return (
        <div
            className="calstack-video-wrapper"
            data-hovering={isHovering}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            ref={wrapperRef}
        >
            <VideoElement {...props} />

            <Overlay />

            <ConditionalVisible on={Boolean(controls)}>
                <ControlBar />
            </ConditionalVisible>
        </div>
    );
};
