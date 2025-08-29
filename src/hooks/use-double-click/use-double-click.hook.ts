import { MouseEvent, useRef } from "react";

export const useDoubleClick = (
    callback: (event: MouseEvent<HTMLButtonElement>) => void,
    singleClickCallback?: () => void,
    interval = 200,
) => {
    const clickTimeout = useRef<number | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        if (clickTimeout.current !== null) {
            window.clearTimeout(clickTimeout.current);
            clickTimeout.current = null;

            callback(event);
        } else {
            clickTimeout.current = window.setTimeout(() => {
                clickTimeout.current = null;

                singleClickCallback?.();
            }, interval);
        }
    };

    return handleClick;
};
