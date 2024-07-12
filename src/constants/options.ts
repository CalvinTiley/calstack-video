import { PlayerOptions } from "@typing/player";

export const defaultOptions = {
    autoplay: false,
    controls: true,
} satisfies Partial<PlayerOptions>;
