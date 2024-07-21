import { playIcon } from "@constants/icons";

import { onClick } from "./events";
import { Player } from "@/Player";

export const setupOverlay = (player: Player) => {
    const overlay = document.createElement("div");

    const bigPlay = document.createElement("div");
    bigPlay.classList.add("calstack-video-big-play");
    bigPlay.innerHTML = playIcon;

    overlay.appendChild(bigPlay);

    overlay.classList.add("calstack-video-overlay");
    player.elements.overlay = overlay;

    player.elements.wrapper.appendChild(overlay);

    overlay.addEventListener("click", onClick(player));
};
