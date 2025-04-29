import { buildClassName } from "~utilities";
import { InputHTMLAttributes } from "react";
import { useRangeSlider } from "./use-range-slider";

import "./RangeSlider.styles.css";

interface IRangeSlider
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    className?: string;
    onChange(value: number): void;
}

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
