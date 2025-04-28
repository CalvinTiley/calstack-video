import { useTime } from "./use-time";

import "./Time.styles.css";

export const Time = () => {
    const { currentTime, duration } = useTime();

    return (
        <div className="calstack-video-time">
            <span>{currentTime}</span>

            <span>/</span>

            <span>{duration}</span>
        </div>
    );
};
