import { useVideoContext } from "~contexts";

export const secondsToHMS = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { hours, minutes, seconds };
};

const formatTime = (totalSeconds: number) => {
    const { hours, minutes, seconds } = secondsToHMS(totalSeconds);

    const parts = [
        hours > 0 ? hours.toString().padStart(2, "0") : null,
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ].filter(Boolean);

    return parts.join(":");
};

export const useTime = () => {
    const { currentTime, duration } = useVideoContext();

    const formattedCurrentTime = formatTime(currentTime);
    const formattedDuration = formatTime(duration);

    return {
        currentTime: formattedCurrentTime,
        duration: formattedDuration,
    };
};
