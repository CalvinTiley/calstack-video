import type { PropsWithChildren } from "react";

export interface ICalstackVideoShell extends PropsWithChildren {
    isLive?: boolean;
    src: string;
}
