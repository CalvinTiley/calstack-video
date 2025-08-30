import { VideoContext } from "./VideoContext.context";
import type { IVideoProvider } from "./VideoContext.types";
import { useVideoProvider } from "./use-video-provider.hook";

export const VideoProvider = ({ children, src }: IVideoProvider) => {
    const contextProps = useVideoProvider({ src });

    return <VideoContext value={contextProps}>{children}</VideoContext>;
};
