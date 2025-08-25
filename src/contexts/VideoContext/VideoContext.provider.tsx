import { PropsWithChildren } from "react";

import { VideoContext } from "./VideoContext.context";
import { useVideoProvider } from "./use-video-provider.hook";

export const VideoProvider = ({ children }: PropsWithChildren) => {
    const contextProps = useVideoProvider();

    return <VideoContext value={contextProps}>{children}</VideoContext>;
};
