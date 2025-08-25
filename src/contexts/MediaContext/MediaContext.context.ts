import { createSafeContext } from "~utilities";

import type { IMediaContext } from "./MediaContext.types";

export const [MediaContext, useMediaContext] = createSafeContext<IMediaContext>(
    "useMediaContext must be used within a <MediaContext>",
);
