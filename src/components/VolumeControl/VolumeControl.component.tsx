import { ConditionalVisible } from "../ConditionalVisible";
import { ControlBarControl } from "../ControlBar/components/Control";
import { MuteIcon, UnmuteIcon } from "../Icons";
import { RangeSlider } from "../RangeSlider";
import { useVolumeControl } from "./use-volume-control.hook";

import "./VolumeControl.styles.css";

export const VolumeControl = () => {
    const { isMuted, onSliderChange, toggleMute, volume } = useVolumeControl();

    return (
        <div className="calstack-video-volume">
            <ControlBarControl
                className="calstack-video-mute-control"
                onClick={toggleMute}
            >
                <ConditionalVisible
                    on={isMuted || !volume}
                    fallback={<UnmuteIcon />}
                >
                    <MuteIcon />
                </ConditionalVisible>
            </ControlBarControl>

            <div className="calstack-video-volume-slider-container">
                <RangeSlider
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
