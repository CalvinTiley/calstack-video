import { useMediaContext } from "~contexts";
import { useToggleFullscreen } from "~hooks";

export const useCalstackVideoFullscreenControl = () => {
    const { isFullscreen } = useMediaContext();
    const toggleFullscreen = useToggleFullscreen();

    return {
        isFullscreen,
        toggleFullscreen,
    };
};
