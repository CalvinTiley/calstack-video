import { HLSProvider, MediaProvider, VideoProvider } from "~contexts";

import { CalstackVideoWrapper } from "../Wrapper";

import { ICalstackVideoShell } from "./Shell.types";

export const CalstackVideoShell = ({
    children,
    isLive,
    src,
}: ICalstackVideoShell) => {
    return (
        <VideoProvider src={src}>
            <MediaProvider>
                <HLSProvider isLive={isLive}>
                    <CalstackVideoWrapper>{children}</CalstackVideoWrapper>
                </HLSProvider>
            </MediaProvider>
        </VideoProvider>
    );
};
