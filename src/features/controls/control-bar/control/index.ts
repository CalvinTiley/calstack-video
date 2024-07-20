import { ControlType } from "@typing/controls";

import { buildCaptionsControl } from "./captions";
import { buildFullscreenControl } from "./fullscreen";
import { buildPIPControl } from "./pip";
import { buildPlayControl } from "./play";
import { Player } from "@/Player";

interface BuildControlProps {
    player: Player;
    type: ControlType;
}

export const buildControl = ({ player, type }: BuildControlProps) => {
    let control: HTMLButtonElement | null = null;

    switch (type) {
        case ControlType.CAPTIONS:
            control = buildCaptionsControl(player);
            break;
        case ControlType.FULL_SCREEN:
            control = buildFullscreenControl(player);
            break;
        case ControlType.PIP:
            control = buildPIPControl(player);
            break;
        default:
            control = buildPlayControl(player);
            break;
    }

    return control;
};
