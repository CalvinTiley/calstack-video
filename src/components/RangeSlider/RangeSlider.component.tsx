import { useRangeSlider } from "./use-range-slider.hook";

import "./RangeSlider.styles.css";
import { IRangeSlider } from "./RangeSlider.types";
import { buildClassName } from "~utilities/build-class-name";

export const RangeSlider = ({
    className,
    onChange,
    value,
    ...props
}: IRangeSlider) => {
    const { onRangeChange } = useRangeSlider({
        onChange,
    });

    return (
        <input
            type="range"
            className={buildClassName("calstack-video-range-slider", className)}
            {...props}
            style={{
                background: `linear-gradient(to right, var(--calstack-video-color-slider-track-progress) ${value}%, var(--calstack-video-color-slider-track) ${value}%)`,
                ...props.style,
            }}
            onChange={onRangeChange}
            value={value}
        />
    );
};
