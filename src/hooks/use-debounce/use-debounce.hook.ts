import { useCallback, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- This can be anything
export const useDebouncedCallback = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number = 300,
) => {
    const timeoutRef = useRef<number | undefined>();

    return useCallback(
        (...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};
