import { useToggleFullscreen } from "~hooks";
import { ConditionalVisible } from "../ConditionalVisible";
import { Control } from "../Control";
import { EnterFullscreenIcon, ExitFullscreenIcon } from "../Icons";
import { useVideoContext } from "~contexts";

export const FullscreenControl = () => {
    const { isFullscreen } = useVideoContext();
    const toggleFullscreen = useToggleFullscreen();

    return (
        <Control onClick={toggleFullscreen}>
            <ConditionalVisible
                on={!isFullscreen}
                fallback={<ExitFullscreenIcon />}
            >
                <EnterFullscreenIcon />
            </ConditionalVisible>
        </Control>
    );
};
