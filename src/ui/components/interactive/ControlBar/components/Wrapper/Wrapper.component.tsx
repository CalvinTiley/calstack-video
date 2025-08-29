import { HTMLAttributes, PropsWithChildren } from "react";

import { buildClassName } from "~ui";

import { useCalstackVideoControlBarWrapper } from "./use-wrapper.hook";

export const CalstackVideoControlBarWrapper = ({
    children,
    ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    const { isActive } = useCalstackVideoControlBarWrapper();

    return (
        <div
            {...props}
            data-active={isActive}
            className={buildClassName(
                "calstack-video-control-bar",
                props?.className,
            )}
        >
            {children}
        </div>
    );
};
