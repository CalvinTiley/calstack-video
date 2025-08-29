import { CalstackVideoRangeSlider, MuteIcon, UnmuteIcon } from "~ui";

import { ConditionalVisible } from "../../miscellaneous";
import { CalstackVideoControlBarControl } from "../ControlBar/components";

import { useVolumeControl } from "./use-volume-control.hook";

import "./VolumeControl.styles.css";

export const VolumeControl = () => {
    const { isMuted, onSliderChange, toggleMute, volume } = useVolumeControl();

    return (
        <div className="calstack-video-volume">
            <CalstackVideoControlBarControl
                className="calstack-video-mute-control"
                onClick={toggleMute}
            >
                <ConditionalVisible
                    on={isMuted || !volume}
                    fallback={<UnmuteIcon />}
                >
                    <MuteIcon />
                </ConditionalVisible>
            </CalstackVideoControlBarControl>

            <div className="calstack-video-volume-slider-container">
                <CalstackVideoRangeSlider
                    onChange={onSliderChange}
                    className="calstack-video-volume-range"
                    id="calstack-video-volume-slider"
                    name="calstack-video-volume-slider"
                    value={volume}
                />
            </div>
        </div>
    );
};
