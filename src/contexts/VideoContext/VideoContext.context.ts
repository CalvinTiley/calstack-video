import { createSafeContext } from "../utilities";
import type { IVideoContext } from "./VideoContext.types";

export const [VideoContext, useVideoContext] = createSafeContext<IVideoContext>(
    "useVideoContext must be used within a <VideoContext>",
);
