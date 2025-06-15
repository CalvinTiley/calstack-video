import "./Control.styles.css";
import { buildClassName } from "~utilities/build-class-name";
import { IControl } from "./Control.types";

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
