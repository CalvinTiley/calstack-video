import type { HTMLAttributes, PropsWithChildren } from "react";

import { buildClassName } from "~ui";

export const CalstackVideoControlBarContainer = (
    props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
) => {
    return (
        <div
            {...props}
            className={buildClassName(
                "calstack-video-control-bar-container",
                props?.className,
            )}
        ></div>
    );
};
