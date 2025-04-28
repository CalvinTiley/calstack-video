import { ConditionalVisible } from "../ConditionalVisible";
import { Control } from "../Control";
import { PauseIcon, PlayIcon } from "../Icons";
import { usePlayPauseControl } from "./use-play-pause-control";

export const PlayPauseControl = () => {
    const { isPlaying, togglePlay } = usePlayPauseControl();

    return (
        <Control onClick={togglePlay}>
            <ConditionalVisible on={!isPlaying} fallback={<PauseIcon />}>
                <PlayIcon />
            </ConditionalVisible>
        </Control>
    );
};
