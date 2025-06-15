import { HTMLAttributes, ReactNode } from "react";
import { buildClassName } from "~utilities";

import "./Control.styles.css";

interface IControl extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isActive?: boolean;
}

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
