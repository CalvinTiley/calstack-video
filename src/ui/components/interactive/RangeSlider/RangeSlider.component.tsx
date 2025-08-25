import { buildClassName } from "~ui";

import type { IRangeSlider } from "./RangeSlider.types";
import { useRangeSlider } from "./use-range-slider.hook";

import "./RangeSlider.styles.css";

export const RangeSlider = ({
    className,
    onChange,
    value,
    ...props
}: IRangeSlider) => {
    const { onRangeChange } = useRangeSlider({
        onChange,
    });

    const newClassName = buildClassName(
        "calstack-video-range-slider",
        className,
    );

    return (
        <input
            type="range"
            {...props}
            className={newClassName}
            style={{
                background: `linear-gradient(to right, var(--calstack-video-color-slider-track-progress) ${value}%, var(--calstack-video-color-slider-track) ${value}%)`,
                ...props.style,
            }}
            onChange={onRangeChange}
            value={value}
        />
    );
};
