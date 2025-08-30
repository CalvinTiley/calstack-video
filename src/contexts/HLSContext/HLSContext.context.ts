import { createContext, useContext } from "react";

import type { IHLSContext } from "./HLSContext.types";

export const HLSContext = createContext<IHLSContext | null>(null);

export const useHLSContext = (): IHLSContext => {
    const ctx = useContext(HLSContext);

    return (
        ctx ?? {
            hls: null,
            isHlsActive: false,
            qualities: [],
            currentQuality: -1,
            setQuality: () => {},
        }
    );
};
