import { useTogglePlay } from "~hooks";
import { ConditionalVisible, PauseIcon, PlayIcon } from "~ui";

import { CalstackVideoControlBarControl } from "../Control";

export const CalstackVideoControlBarPlayPauseControl = () => {
    const { isPlaying, togglePlay } = useTogglePlay();

    return (
        <CalstackVideoControlBarControl onClick={togglePlay}>
            <ConditionalVisible on={!isPlaying} fallback={<PauseIcon />}>
                <PlayIcon />
            </ConditionalVisible>
        </CalstackVideoControlBarControl>
    );
};
