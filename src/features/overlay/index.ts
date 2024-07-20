import { Player } from "@/Player";

export const setupOverlay = (player: Player) => {
    const overlay = document.createElement("div");

    overlay.classList.add("calstack-video-overlay");
    player.elements.overlay = overlay;

    player.elements.wrapper.appendChild(overlay);
};
