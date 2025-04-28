import { useCallback } from "react";

export const useNextControl = () => {
    const onNext = useCallback(() => {
        // TODO: Hook up to configurable callback
        console.log("Next");
    }, []);

    return {
        onNext,
    };
};
