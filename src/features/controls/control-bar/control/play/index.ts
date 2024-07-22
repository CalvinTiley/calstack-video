import { pauseIcon, playIcon } from "@constants/icons";
import { ControlType } from "@typing/controls";

import { buildBaseControl } from "../utilities";

import { onClick } from "./events";
import { Player } from "@/Player";

export const buildPlayControl = (player: Player) => {
    const control = buildBaseControl(ControlType.PLAY);

    control.innerHTML = playIcon + pauseIcon;
    control.setAttribute("aria-label", "Play video");
    control.setAttribute("data-active", "false");

    player.elements.playButton = control;

    control.addEventListener("click", onClick(player));

    return control;
};
