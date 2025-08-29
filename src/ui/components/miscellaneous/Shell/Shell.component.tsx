import { PropsWithChildren } from "react";

import { MediaProvider, VideoProvider } from "~contexts";

import { CalstackVideoWrapper } from "../Wrapper";

export const CalstackVideoShell = ({ children }: PropsWithChildren) => {
    return (
        <VideoProvider>
            <MediaProvider>
                <CalstackVideoWrapper>{children}</CalstackVideoWrapper>
            </MediaProvider>
        </VideoProvider>
    );
};
