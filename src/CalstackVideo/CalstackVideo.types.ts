import { ICalstackVideoControlBar } from "src/ui/components/interactive/ControlBar/ControlBar.types";

import type { ICalstackVideoOverlay, ICalstackVideoVideo } from "~ui";

export interface ICalstackVideo {
    controlBarProps?: ICalstackVideoControlBar;
    overlayProps?: ICalstackVideoOverlay;
    videoProps: ICalstackVideoVideo;
}
