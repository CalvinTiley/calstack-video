import { useMediaContext } from "~contexts";
import { useToggleFullscreen } from "~hooks";
import {
    ConditionalVisible,
    EnterFullscreenIcon,
    ExitFullscreenIcon,
} from "~ui";

import { ControlBarControl } from "../Control";

export const ControlBarFullscreenControl = () => {
    const { isFullscreen } = useMediaContext();
    const toggleFullscreen = useToggleFullscreen();

    return (
        <ControlBarControl onClick={toggleFullscreen}>
            <ConditionalVisible
                on={!isFullscreen}
                fallback={<ExitFullscreenIcon />}
            >
                <EnterFullscreenIcon />
            </ConditionalVisible>
        </ControlBarControl>
    );
};
