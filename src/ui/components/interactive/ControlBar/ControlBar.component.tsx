import { ConditionalVisible } from "../../miscellaneous";
import { VolumeControl } from "../VolumeControl";

import { ICalstackVideoControlBar } from "./ControlBar.types";
import {
    CalstackVideoControlBarCenter,
    CalstackVideoControlBarContainer,
    CalstackVideoControlBarControl,
    CalstackVideoControlBarControls,
    CalstackVideoControlBarFullscreenControl,
    CalstackVideoControlBarNextControl,
    CalstackVideoControlBarPlayPauseControl,
    CalstackVideoControlBarProgressBar,
    CalstackVideoControlBarShell,
    CalstackVideoControlBarTime,
    CalstackVideoControlBarWrapper,
} from "./components";

import "./ControlBar.styles.css";

export const CalstackVideoControlBar = ({
    components,
    containerProps,
    onNext,
    ...props
}: ICalstackVideoControlBar) => {
    return (
        <CalstackVideoControlBarShell
            containerProps={containerProps}
            {...props}
        >
            <ConditionalVisible
                on={!components?.progress}
                fallback={components?.progress}
            >
                <CalstackVideoControlBarProgressBar />
            </ConditionalVisible>

            <ConditionalVisible
                on={!components?.controls}
                fallback={components?.controls}
            >
                <CalstackVideoControlBarControls>
                    <ConditionalVisible
                        on={!components?.["play-pause"]}
                        fallback={components?.["play-pause"]}
                    >
                        <CalstackVideoControlBarPlayPauseControl />
                    </ConditionalVisible>

                    <ConditionalVisible
                        on={onNext && !components?.["next-video"]}
                        fallback={components?.["next-video"]}
                    >
                        <CalstackVideoControlBarNextControl onNext={onNext} />
                    </ConditionalVisible>

                    <ConditionalVisible
                        on={!components?.volume}
                        fallback={components?.volume}
                    >
                        <VolumeControl />
                    </ConditionalVisible>

                    <ConditionalVisible
                        on={!components?.center}
                        fallback={components?.center}
                    >
                        <CalstackVideoControlBarCenter>
                            <ConditionalVisible
                                on={!components?.time}
                                fallback={components?.time}
                            >
                                <CalstackVideoControlBarTime />
                            </ConditionalVisible>
                        </CalstackVideoControlBarCenter>
                    </ConditionalVisible>

                    <ConditionalVisible
                        on={!components?.fullscreen}
                        fallback={components?.fullscreen}
                    >
                        <CalstackVideoControlBarFullscreenControl />
                    </ConditionalVisible>
                </CalstackVideoControlBarControls>
            </ConditionalVisible>
        </CalstackVideoControlBarShell>
    );
};

CalstackVideoControlBar.Center = CalstackVideoControlBarCenter;
CalstackVideoControlBar.Container = CalstackVideoControlBarContainer;
CalstackVideoControlBar.Control = CalstackVideoControlBarControl;
CalstackVideoControlBar.Controls = CalstackVideoControlBarControls;
CalstackVideoControlBar.FullscreenControl =
    CalstackVideoControlBarFullscreenControl;
CalstackVideoControlBar.NextControl = CalstackVideoControlBarNextControl;
CalstackVideoControlBar.PlayPauseControl =
    CalstackVideoControlBarPlayPauseControl;
CalstackVideoControlBar.ProgressBar = CalstackVideoControlBarProgressBar;
CalstackVideoControlBar.Time = CalstackVideoControlBarTime;
CalstackVideoControlBar.Shell = CalstackVideoControlBarShell;
CalstackVideoControlBar.Wrapper = CalstackVideoControlBarWrapper;
