import { ACTIVE_CONTROL_CLASS } from "@constants/controls";

import { Player } from "@/Player";

export const isFullscreen = () =>
    Boolean(
        document.fullscreenElement ||
            document["webkitFullscreenElement" as "fullscreenElement"] ||
            document["mozFullScreenElement" as "fullscreenElement"],
    );

export const enterFullscreen = ({
    elements: { fullscreenButton, wrapper },
}: Player) => {
    if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
    } else if (wrapper["webkitRequestFullscreen" as "requestFullscreen"]) {
        wrapper["webkitRequestFullscreen" as "requestFullscreen"]();
    } else if (wrapper["mozRequestFullScreen" as "requestFullscreen"]) {
        wrapper["mozRequestFullScreen" as "requestFullscreen"]();
    } else {
        console.error("Fullscreen API is not supported");
        return;
    }

    wrapper.setAttribute("data-fullscreen", "true");
    fullscreenButton?.classList.remove(ACTIVE_CONTROL_CLASS);
    fullscreenButton?.setAttribute("data-active", "false");
};

export const exitFullscreen = ({
    elements: { fullscreenButton, wrapper },
}: Player) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document["webkitExitFullscreen" as "exitFullscreen"]) {
        document["webkitExitFullscreen" as "exitFullscreen"]();
    } else if (document["mozCancelFullScreen" as "exitFullscreen"]) {
        document["mozCancelFullScreen" as "exitFullscreen"]();
    } else {
        console.error("Fullscreen API is not supported");
        return;
    }

    wrapper.setAttribute("data-fullscreen", "false");
    fullscreenButton?.classList.add(ACTIVE_CONTROL_CLASS);
    fullscreenButton?.setAttribute("data-active", "true");
};

export const toggleFullscreen = (player: Player) => {
    if (isFullscreen()) {
        exitFullscreen(player);
    } else {
        enterFullscreen(player);
    }
};
