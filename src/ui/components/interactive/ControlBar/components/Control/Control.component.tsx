import { buildClassName } from "~ui";

import { IControl } from "./Control.types";

import "./Control.styles.css";

export const ControlBarControl = ({
    children,
    className,
    isActive,
    ...props
}: IControl) => {
    return (
        <button
            className={buildClassName("calstack-video-control", className)}
            data-active={isActive}
            {...props}
        >
            {children}
        </button>
    );
};
