import { ChangeEvent } from "react";

interface IUseRangeSlider {
    onChange(value: number): void;
}

export const useRangeSlider = ({ onChange }: IUseRangeSlider) => {
    const onRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, max, min } = event.target;

        const safeMax = max ? Number(max) : 100;
        const safeMin = min ? Number(min) : 0;
        const safeValue = value ? Number(value) : safeMax;

        const progress = ((safeValue - safeMin) / (safeMax - safeMin)) * 100;

        onChange(progress);
    };

    return {
        onRangeChange,
    };
};
