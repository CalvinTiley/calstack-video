import type { HTMLAttributes } from "react";

import type { IVideoElement } from "~ui";

export interface ICalstackVideo extends IVideoElement {
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
}
