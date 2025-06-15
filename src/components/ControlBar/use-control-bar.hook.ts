import { useVideoContext } from "~contexts";

export const useControlBar = () => {
    const { isPlaying } = useVideoContext();

    return {
        isActive: !isPlaying,
    };
};
