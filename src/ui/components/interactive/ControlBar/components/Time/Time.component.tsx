import { useCalstackVideoControlBarTime } from "./use-time.hook";

import "./Time.styles.css";

export const CalstackVideoControlBarTime = () => {
    const { currentTime, duration } = useCalstackVideoControlBarTime();

    return (
        <div className="calstack-control-bar-video-time">
            <span>{currentTime}</span>

            <span>/</span>

            <span>{duration}</span>
        </div>
    );
};
