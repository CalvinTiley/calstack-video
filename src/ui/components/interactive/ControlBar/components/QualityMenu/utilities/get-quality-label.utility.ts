import { IQualityLevel } from "~contexts";

export const getQualityLabel = ({ name, height, index }: IQualityLevel) =>
    name ?? (height ? `${height}p` : `Level ${index}`);
