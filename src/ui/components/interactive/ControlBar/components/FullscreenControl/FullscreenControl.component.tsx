import {
    ConditionalVisible,
    EnterFullscreenIcon,
    ExitFullscreenIcon,
} from "~ui";

import { CalstackVideoControlBarControl } from "../Control";

import { useCalstackVideoFullscreenControl } from "./use-fullscreen-control.hook";

export const CalstackVideoControlBarFullscreenControl = () => {
    const { isFullscreen, toggleFullscreen } =
        useCalstackVideoFullscreenControl();

    return (
        <CalstackVideoControlBarControl onClick={toggleFullscreen}>
            <ConditionalVisible
                on={!isFullscreen}
                fallback={<ExitFullscreenIcon />}
            >
                <EnterFullscreenIcon />
            </ConditionalVisible>
        </CalstackVideoControlBarControl>
    );
};
