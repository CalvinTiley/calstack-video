import { playIcon } from "@constants/icons";

import { onClick } from "./events";
import { Player } from "@/Player";

export const setupOverlay = (player: Player) => {
    const overlay = document.createElement("div");
    overlay.classList.add("calstack-video-overlay");
    player.elements.overlay = overlay;

    const bigPlay = document.createElement("div");
    bigPlay.classList.add("calstack-video-big-play");
    bigPlay.innerHTML = playIcon;
    overlay.appendChild(bigPlay);

    overlay.addEventListener("click", onClick(player));

    player.elements.wrapper.appendChild(overlay);

    return overlay;
};
