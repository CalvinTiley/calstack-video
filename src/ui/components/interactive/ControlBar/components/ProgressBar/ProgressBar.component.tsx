import { CalstackVideoRangeSlider } from "~ui";

import { useProgressBar } from "./use-progress-bar.hook";

export const CalstackVideoControlBarProgressBar = () => {
    const { onChange, onMouseDown, onMouseUp, progress } = useProgressBar();

    return (
        <div className="calstack-video-progress-bar">
            <CalstackVideoRangeSlider
                className="calstack-video-progress-bar__slider"
                onChange={onChange}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                style={{
                    background: `linear-gradient(to right, var(--calstack-video-color-accent) ${progress}%, var(--calstack-video-color-slider-track) ${progress}%)`,
                }}
                value={progress}
            />
        </div>
    );
};
