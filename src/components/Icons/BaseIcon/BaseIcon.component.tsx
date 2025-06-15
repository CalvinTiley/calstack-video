import { HTMLAttributes, ReactNode } from "react";

import "./BaseIcon.styles.css";
import { buildClassName } from "~utilities/build-class-name";

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
