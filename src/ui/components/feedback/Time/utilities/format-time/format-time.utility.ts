import { secondsToHMS } from "./utilities";

export const formatTime = (totalSeconds: number) => {
    const { hours, minutes, seconds } = secondsToHMS(totalSeconds);

    const parts = [
        hours > 0 ? hours.toString().padStart(2, "0") : null,
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ].filter(Boolean);

    return parts.join(":");
};
