import { exitFullscreenIcon, fullscreenIcon } from "@constants/icons";
import { ControlType } from "@typing/controls";

import { buildBaseControl } from "../utilities";

import { onClick } from "./events";
import { Player } from "@/Player";

export const buildFullscreenControl = (player: Player) => {
    const control = buildBaseControl(ControlType.FULL_SCREEN);
    player.elements.fullscreenButton = control;

    control.innerHTML = fullscreenIcon + exitFullscreenIcon;
    control.setAttribute("aria-label", "Enter fullscreen mode.");
    control.setAttribute("data-active", "false");

    control.addEventListener("click", onClick(player));

    return control;
};
