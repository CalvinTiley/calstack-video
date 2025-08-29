import { ICalstackVideoControlBarTime } from "./Time.types";
import { useCalstackVideoControlBarTime } from "./use-time.hook";

import "./Time.styles.css";

export const CalstackVideoControlBarTime = ({
    maxUnit,
}: ICalstackVideoControlBarTime) => {
    const { currentTime, duration } = useCalstackVideoControlBarTime({
        maxUnit,
    });

    return (
        <div className="calstack-control-bar-video-time">
            <span>{currentTime}</span>

            <span>/</span>

            <span>{duration}</span>
        </div>
    );
};
