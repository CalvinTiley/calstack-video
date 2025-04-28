import {
    CalstackVideoElement,
    ConditionalVisible,
    ControlBar,
} from "~components";

import { ICalstackVideo } from "~types/video.type";
import { useWrapper } from "./use-wrapper";

import "./Wrapper.styles.css";
import { Overlay } from "../Overlay";

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
            <CalstackVideoElement {...props} />

            <Overlay />

            <ConditionalVisible on={Boolean(controls)}>
                <ControlBar />
            </ConditionalVisible>
        </div>
    );
};
