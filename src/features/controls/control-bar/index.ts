import { ControlType } from "@typing/controls";

import { buildControl } from "./control";
import { buildTimeElements } from "./time";
import { Player } from "@/Player";

export const setupControlBar = (player: Player) => {
    const controlBar = document.createElement("div");
    controlBar.classList.add("calstack-video-control-bar");

    const spacer = document.createElement("div");
    spacer.classList.add("calstack-video-spacer");
    player.elements.spacer = spacer;

    controlBar.appendChild(buildControl({ player, type: ControlType.PLAY }));
    controlBar.appendChild(buildTimeElements(player));
    controlBar.appendChild(spacer);
    controlBar.appendChild(
        buildControl({ player, type: ControlType.CAPTIONS }),
    );

    if (
        (player.elements.video as { requestPictureInPicture: unknown })
            .requestPictureInPicture
    ) {
        controlBar.appendChild(buildControl({ player, type: ControlType.PIP }));
    }

    controlBar.appendChild(
        buildControl({
            player,
            type: ControlType.FULL_SCREEN,
        }),
    );

    return controlBar;
};
