import { MediaProvider, VideoProvider } from "~contexts";
import {
    CalstackVideoControlBar,
    CalstackVideoOverlay,
    CalstackVideoShell,
    CalstackVideoVideo,
    CalstackVideoWrapper,
} from "~ui";

import { ICalstackVideo } from "./CalstackVideo.types";

export const CalstackVideo = ({
    controlBarProps,
    isLive,
    overlayProps,
    src,
    videoProps,
}: ICalstackVideo) => {
    return (
        <CalstackVideoShell isLive={isLive} src={src}>
            <CalstackVideoVideo {...videoProps} />

            <CalstackVideoOverlay {...overlayProps} />

            <CalstackVideoControlBar {...controlBarProps} />
        </CalstackVideoShell>
    );
};

CalstackVideo.ControlBar = CalstackVideoControlBar;
CalstackVideo.MediaProvider = MediaProvider;
CalstackVideo.Overlay = CalstackVideoOverlay;
CalstackVideo.Shell = CalstackVideoShell;
CalstackVideo.Video = CalstackVideoVideo;
CalstackVideo.VideoProvider = VideoProvider;
CalstackVideo.Wrapper = CalstackVideoWrapper;
