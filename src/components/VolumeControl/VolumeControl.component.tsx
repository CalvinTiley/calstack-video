import { ConditionalVisible } from "../ConditionalVisible";
import { Control } from "../Control";
import { MuteIcon, UnmuteIcon } from "../Icons";
import { RangeSlider } from "../RangeSlider";
import { useVolumeControl } from "./use-volume-control";

import "./VolumeControl.styles.css";

export const VolumeControl = () => {
    const { isMuted, onSliderChange, toggleMute, volume } = useVolumeControl();

    return (
        <div className="calstack-video-volume">
            <Control
                className="calstack-video-mute-control"
                onClick={toggleMute}
            >
                <ConditionalVisible
                    on={isMuted || !volume}
                    fallback={<UnmuteIcon />}
                >
                    <MuteIcon />
                </ConditionalVisible>
            </Control>

            <div className="calstack-video-volume-slider-container">
                <RangeSlider
                    onChange={onSliderChange}
                    className="calstack-video-volume-range"
                    id="calstack-video-volume-slider"
                    name="calstack-video-volume-slider"
                    value={volume * 100}
                />
            </div>
        </div>
    );
};
