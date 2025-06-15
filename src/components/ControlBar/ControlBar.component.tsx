import { useControlBar } from "./use-control-bar.hook";

import { Time } from "../Time";
import { VolumeControl } from "../VolumeControl";
import {
    ControlBarControl,
    ControlBarFullscreenControl,
    ControlBarNextControl,
    ControlBarPlayPauseControl,
    ControlBarProgressBar,
} from "./components";

import "./ControlBar.styles.css";

export const ControlBar = () => {
    const { isActive } = useControlBar();

    return (
        <div className="calstack-video-control-bar" data-active={isActive}>
            <div className="calstack-video-control-bar-container">
                <ControlBarProgressBar />

                <div className="calstack-video-control-bar-controls">
                    <ControlBarPlayPauseControl />

                    <ControlBarNextControl />

                    <VolumeControl />

                    <div className="calstack-video-control-bar-center">
                        <Time />
                    </div>

                    <ControlBarFullscreenControl />
                </div>
            </div>
        </div>
    );
};

ControlBar.Control = ControlBarControl;
ControlBar.FullscreenControl = ControlBarFullscreenControl;
ControlBar.Control = ControlBarControl;
ControlBar.Control = ControlBarControl;
ControlBar.Control = ControlBarControl;
