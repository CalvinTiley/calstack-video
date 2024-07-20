import { onChange } from "./events";
import { Player } from "@/Player";

export const setupProgressBar = (player: Player) => {
    const progressBar = document.createElement("div");
    progressBar.classList.add("calstack-video-progress-bar");
    player.elements.progressBar = progressBar;

    const progressInput = document.createElement("input");
    progressInput.type = "range";
    progressInput.classList.add("calstack-video-progress-input");
    player.elements.progressInput = progressInput;

    progressInput.setAttribute("value", "0");
    progressInput.setAttribute("min", "0");
    progressInput.setAttribute("max", "100");

    progressBar.appendChild(progressInput);

    progressInput.addEventListener("change", onChange(player));

    return progressBar;
};
