import { VideoContext } from "./VideoContext.context";
import { IVideoProvider } from "./VideoContext.types";
import { useVideoProvider } from "./use-video-provider.hook";

export const VideoProvider = ({ children }: IVideoProvider) => {
    const contextProps = useVideoProvider();

    return <VideoContext value={contextProps}>{children}</VideoContext>;
};
