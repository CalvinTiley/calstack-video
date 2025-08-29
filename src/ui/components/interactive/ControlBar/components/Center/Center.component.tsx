import { HTMLAttributes, PropsWithChildren } from "react";

import { buildClassName } from "~ui";

export const CalstackVideoControlBarCenter = ({
    children,
    ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
    return (
        <div
            {...props}
            className={buildClassName("calstack-video-control-bar-center")}
        >
            {children}
        </div>
    );
};
