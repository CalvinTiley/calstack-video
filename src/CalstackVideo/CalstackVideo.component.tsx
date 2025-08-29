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
    overlayProps,
    videoProps,
}: ICalstackVideo) => {
    return (
        <CalstackVideoShell>
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
