import type { InputHTMLAttributes } from "react";

export interface IRangeSlider
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    onChange: (value: number) => void;
    value: number;
}

export interface IUseRangeSlider {
    onChange: (value: number) => void;
}
