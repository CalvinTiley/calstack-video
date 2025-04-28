import { PlayPauseControl } from "../PlayPauseControl";

import { useControlBar } from "./use-control-bar";

import "./ControlBar.styles.css";
import { NextControl } from "../NextControl";
import { Time } from "../Time";
import { VolumeControl } from "../VolumeControl";
import { FullscreenControl } from "../FullscreenControl";
import { ProgressBar } from "./components";

export const ControlBar = () => {
    const { isActive } = useControlBar();

    return (
        <div className="calstack-video-control-bar" data-active={isActive}>
            <div className="calstack-video-control-bar-container">
                <ProgressBar />

                <div className="calstack-video-control-bar-controls">
                    <PlayPauseControl />

                    <NextControl />

                    <VolumeControl />

                    <div className="calstack-video-control-bar-center">
                        <Time />
                    </div>

                    <FullscreenControl />
                </div>
            </div>
        </div>
    );
};
