import { HTMLAttributes, ReactNode } from "react";

import { VideoControlBarComponent } from "./ControlBar.enum";

export interface ICalstackVideoControlBar
    extends HTMLAttributes<HTMLDivElement> {
    containerProps?: HTMLAttributes<HTMLDivElement>;
    components?: Record<VideoControlBarComponent, ReactNode>;
    onNext?: () => void;
}
