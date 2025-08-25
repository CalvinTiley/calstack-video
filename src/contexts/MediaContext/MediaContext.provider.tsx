import { PropsWithChildren } from "react";

import { MediaContext } from "./MediaContext.context";
import { useMediaProvider } from "./use-media-provider.hook";

export const MediaProvider = ({ children }: PropsWithChildren) => {
    const contextProps = useMediaProvider();

    return <MediaContext value={contextProps}>{children}</MediaContext>;
};
