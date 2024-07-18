import { type PlayerOptions, TimeFormat } from "@typing/player";

export const defaultOptions = {
    autoplay: false,
    controls: true,
    maxTimeFormat: TimeFormat.HOURS,
} satisfies Partial<PlayerOptions>;
