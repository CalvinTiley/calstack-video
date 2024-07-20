import { captionsIcon } from "@constants/icons";
import { ControlType } from "@typing/controls";

import { buildBaseControl } from "../utilities";

import { buildCaptionEvents } from "./events";
import { Player } from "@/Player";

export const buildCaptionsControl = (player: Player) => {
    const control = buildBaseControl(ControlType.CAPTIONS);

    control.innerHTML = captionsIcon;
    control.setAttribute("aria-label", "Toggle subtitles/captions");
    control.setAttribute("data-active", "false");

    player.elements.captions = control;

    buildCaptionEvents(control, player);

    return control;
};
