import { InputHTMLAttributes } from "react";

export interface IRangeSlider
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    className?: string;
    onChange(value: number): void;
}
