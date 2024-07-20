import { PlayerOptions } from "@typing/player";
import { isElement } from "@utils/dom";
import { logError } from "@utils/logger";

import { onClick, onPause, onPlay, onTimeUpdate } from "./events";
import { Player } from "@/Player";

export const buildWrapper = (target: HTMLElement | string) => {
    const wrapper =
        typeof target === "string" ? document.querySelector(target) : target;

    if (!isElement(wrapper)) {
        return logError(
            `Could not find a valid HTML element with the provided target: "${target}".`,
        );
    }

    wrapper.classList.add("calstack-video-wrapper");

    return wrapper;
};

export const buildVideo = (options: PlayerOptions) => {
    const { src } = options;

    const video = document.createElement("video");

    video.classList.add("calstack-video");
    video.src = src;

    return video;
};

export const setupVideo = (player: Player) => {
    player.elements.video.addEventListener("click", onClick(player));
    player.elements.video.addEventListener("pause", onPause(player));
    player.elements.video.addEventListener("play", onPlay(player));
    player.elements.video.addEventListener("timeupdate", onTimeUpdate(player));
};
