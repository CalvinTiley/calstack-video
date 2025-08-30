import { IQualityLevel } from "~contexts";

export const getQualityBitrate = ({ bitrate }: IQualityLevel) =>
    bitrate ? ` (${Math.round(bitrate / 1000)} kbps)` : "";
