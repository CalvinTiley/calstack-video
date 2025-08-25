import { useMediaContext } from "~contexts";

export const useControlBar = () => {
    const { isPlaying } = useMediaContext();

    return {
        isActive: !isPlaying,
    };
};
