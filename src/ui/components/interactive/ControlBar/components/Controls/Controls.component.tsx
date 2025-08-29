import { HTMLAttributes, PropsWithChildren } from "react";

import { buildClassName } from "~ui";

export const CalstackVideoControlBarControls = ({
    children,
    ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    return (
        <div
            {...props}
            className={buildClassName(
                "calstack-video-control-bar-controls",
                props?.className,
            )}
        >
            {children}
        </div>
    );
};
