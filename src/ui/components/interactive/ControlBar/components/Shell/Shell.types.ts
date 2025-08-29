import type { HTMLAttributes, PropsWithChildren } from "react";

export interface ICalstackVideoControlBarShell
    extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    containerProps?: HTMLAttributes<HTMLDivElement>;
}
