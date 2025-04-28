import { useRef } from "react";

export const useDoubleClick = (
    callback: () => void,
    singleClickCallback?: () => void,
    interval = 200,
) => {
    const clickTimeout = useRef<number | null>(null);

    const handleClick = () => {
        if (clickTimeout.current !== null) {
            window.clearTimeout(clickTimeout.current);
            clickTimeout.current = null;

            callback();
        } else {
            clickTimeout.current = window.setTimeout(() => {
                clickTimeout.current = null;

                singleClickCallback?.();
            }, interval);
        }
    };

    return handleClick;
};
