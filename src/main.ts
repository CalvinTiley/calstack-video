import { PlayerOptions } from "@typing/player";

import { Player } from "./Player";
import "./scss/main.scss";

export const player = (target: HTMLElement | string, options: PlayerOptions) =>
    new Player(target, options);
