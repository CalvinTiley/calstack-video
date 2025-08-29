import { useMediaContext } from "~contexts";

import { ICalstackVideoControlBarTime } from "./Time.types";
import { formatTime } from "./utilities";

export const useCalstackVideoControlBarTime = ({
    maxUnit,
}: Pick<ICalstackVideoControlBarTime, "maxUnit">) => {
    const { currentTime, duration } = useMediaContext();

    const formattedCurrentTime = formatTime(currentTime, maxUnit);
    const formattedDuration = formatTime(duration, maxUnit);

    return {
        currentTime: formattedCurrentTime,
        duration: formattedDuration,
    };
};
