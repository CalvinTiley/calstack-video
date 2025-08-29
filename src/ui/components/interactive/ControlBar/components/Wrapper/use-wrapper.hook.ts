import { useMediaContext } from "~contexts";

export const useCalstackVideoControlBarWrapper = () => {
    const { isPlaying } = useMediaContext();

    return {
        isActive: !isPlaying,
    };
};
