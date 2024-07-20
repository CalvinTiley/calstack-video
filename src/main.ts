import type { PlayerOptions } from "@typing/player";

import { Player } from "./Player";
import "./scss/main.scss";

export type { ControlType } from "@typing/controls";
export type { PlayerElements, PlayerOptions } from "@typing/player";
export type { TimeFormat } from "@typing/time";

export const player = (
    target: HTMLElement | string,
    options: PlayerOptions,
): Player => new Player(target, options);
