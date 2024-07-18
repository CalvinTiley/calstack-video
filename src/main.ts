import type { PlayerOptions } from "@typing/player";

import { Player } from "./Player";
import "./scss/main.scss";

export type { PlayerOptions } from "@typing/player";
export type { PlayerElements } from "@typing/dom";

export const player = (
    target: HTMLElement | string,
    options: PlayerOptions,
): Player => new Player(target, options);
