import type {
    ICalstackVideoControlBar,
    ICalstackVideoOverlay,
    ICalstackVideoVideo,
} from "~ui";

export interface ICalstackVideo {
    controlBarProps?: ICalstackVideoControlBar;
    overlayProps?: ICalstackVideoOverlay;
    isLive?: boolean;
    src: string;
    videoProps?: Omit<ICalstackVideoVideo, "src">;
}
