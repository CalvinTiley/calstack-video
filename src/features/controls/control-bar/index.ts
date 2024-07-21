import { ControlType } from "@typing/controls";

import { buildControl } from "./control";
import { buildTimeElements } from "./time";
import { Player } from "@/Player";

export const setupControlBar = (player: Player) => {
    const controlBar = document.createElement("div");
    controlBar.classList.add("calstack-video-control-bar");

    const playButton = buildControl({ player, type: ControlType.PLAY });
    const fullscreenButton = buildControl({
        player,
        type: ControlType.FULL_SCREEN,
    });
    const captionsButton = buildControl({ player, type: ControlType.CAPTIONS });
    const pipButton = buildControl({ player, type: ControlType.PIP });
    const time = buildTimeElements(player);

    const spacer = document.createElement("div");
    spacer.classList.add("calstack-video-spacer");

    player.elements.playButton = playButton;
    player.elements.spacer = spacer;
    player.elements.captions = captionsButton;
    player.elements.pipButton = pipButton;
    player.elements.fullscreenButton = fullscreenButton;

    controlBar.appendChild(playButton);
    controlBar.appendChild(time);
    controlBar.appendChild(spacer);
    controlBar.appendChild(captionsButton);

    if (
        (player.elements.video as { requestPictureInPicture: unknown })
            .requestPictureInPicture
    ) {
        controlBar.appendChild(pipButton);
    }

    controlBar.appendChild(fullscreenButton);

    return controlBar;
};
