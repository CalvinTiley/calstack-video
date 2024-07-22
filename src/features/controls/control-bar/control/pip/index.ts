import { ACTIVE_CONTROL_CLASS } from "@constants/controls";
import { pipIcon } from "@constants/icons";
import { ControlType } from "@typing/controls";

import { buildBaseControl } from "../utilities";

import { onClick } from "./events";
import { Player } from "@/Player";

export const buildPIPControl = (player: Player) => {
    const control = buildBaseControl(ControlType.PIP);

    control.innerHTML = pipIcon;
    control.setAttribute("aria-label", "Enter picture in picture mode.");
    control.setAttribute("data-active", "false");
    control.classList.add(ACTIVE_CONTROL_CLASS);

    player.elements.pipButton = control;

    control.addEventListener("click", onClick(player));

    return control;
};
