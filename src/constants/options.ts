import { type PlayerOptions } from "@typing/player";
import { TimeFormat } from "@typing/time";

export const defaultOptions = {
    autoplay: false,
    controls: true,
    maxTimeFormat: TimeFormat.HOURS,
} satisfies Partial<PlayerOptions>;
