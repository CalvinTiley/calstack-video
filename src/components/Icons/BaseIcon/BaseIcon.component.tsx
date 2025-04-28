import { HTMLAttributes, ReactNode } from "react";
import { buildClassName } from "~utilities";

import "./BaseIcon.styles.css";

interface IBaseIcon extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const BaseIcon = ({ children, className, ...props }: IBaseIcon) => {
    return (
        <div
            className={buildClassName("calstack-video-icon", className)}
            {...props}
        >
            {children}
        </div>
    );
};
