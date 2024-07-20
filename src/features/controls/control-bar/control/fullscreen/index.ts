import { ACTIVE_CONTROL_CLASS } from "@constants/controls";
import { exitFullscreenIcon, fullscreenIcon } from "@constants/icons";
import { ControlType } from "@typing/controls";

import { buildBaseControl } from "../utilities";

import { onClick } from "./events";
import { Player } from "@/Player";

export const buildFullscreenControl = (player: Player) => {
    const control = buildBaseControl(ControlType.FULL_SCREEN);

    control.innerHTML = fullscreenIcon + exitFullscreenIcon;
    control.setAttribute("aria-label", "Enter fullscreen mode.");
    control.setAttribute("data-active", "true");
    control.classList.add(ACTIVE_CONTROL_CLASS);

    player.elements.fullscreenButton = control;

    const { options } = player;

    if (options.controls) {
        onClick(control, player);
    }

    return control;
};
