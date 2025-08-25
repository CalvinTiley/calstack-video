import { ConditionalVisible, PauseIcon, PlayIcon } from "~ui";

import { ControlBarControl } from "../Control";

import { usePlayPauseControl } from "./use-play-pause-control.hook";

export const ControlBarPlayPauseControl = () => {
    const { isPlaying, togglePlay } = usePlayPauseControl();

    return (
        <ControlBarControl onClick={togglePlay}>
            <ConditionalVisible on={!isPlaying} fallback={<PauseIcon />}>
                <PlayIcon />
            </ConditionalVisible>
        </ControlBarControl>
    );
};
