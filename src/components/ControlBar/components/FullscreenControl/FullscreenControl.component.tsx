import { useToggleFullscreen } from "~hooks";
import { ConditionalVisible } from "../../../ConditionalVisible";
import { ControlBarControl } from "../Control";
import { EnterFullscreenIcon, ExitFullscreenIcon } from "../../../Icons";
import { useVideoContext } from "~contexts";

export const ControlBarFullscreenControl = () => {
    const { isFullscreen } = useVideoContext();
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
