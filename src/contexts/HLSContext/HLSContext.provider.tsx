import { HLSContext } from "./HLSContext.context";
import type { IHLSProvider } from "./HLSContext.types";
import { useHLSProvider } from "./use-hls-provider.hook";

export const HLSProvider = ({ isLive, children }: IHLSProvider) => {
    const { value } = useHLSProvider({ isLive });

    return <HLSContext.Provider value={value}>{children}</HLSContext.Provider>;
};
