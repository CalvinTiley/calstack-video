import { setupControlBar } from "./control-bar";
import { setupProgressBar } from "./progress-bar";
import { Player } from "@/Player";

export const setupControls = (player: Player) => {
    const controlWrapper = document.createElement("div");
    controlWrapper.classList.add("calstack-video-control-wrapper");

    controlWrapper.appendChild(setupProgressBar(player));
    controlWrapper.appendChild(setupControlBar(player));

    player.elements.wrapper.appendChild(controlWrapper);

    return controlWrapper;
};
