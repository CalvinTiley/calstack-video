import { useVideoContext } from "~contexts";
import { formatTime } from "./utilities";

export const useTime = () => {
    const { currentTime, duration } = useVideoContext();

    const formattedCurrentTime = formatTime(currentTime);
    const formattedDuration = formatTime(duration);

    return {
        currentTime: formattedCurrentTime,
        duration: formattedDuration,
    };
};
