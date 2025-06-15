import { ConditionalVisible } from "../../../ConditionalVisible";
import { ControlBarControl } from "../Control";
import { PauseIcon, PlayIcon } from "../../../Icons";
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
