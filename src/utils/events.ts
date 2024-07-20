import { ACTIVE_CONTROL_CLASS } from "@constants/controls";

import { Player } from "@/Player";

const isFullscreen = () =>
    document.fullscreenElement ||
    document["webkitFullscreenElement" as "fullscreenElement"] ||
    document["mozFullScreenElement" as "fullscreenElement"];

const enterFullscreen = ({
    elements: { fullscreenButton, wrapper },
}: Player) => {
    if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
    } else if (wrapper["msRequestFullscreen" as "requestFullscreen"]) {
        wrapper["msRequestFullscreen" as "requestFullscreen"]();
    } else if (wrapper["mozRequestFullScreen" as "requestFullscreen"]) {
        wrapper["mozRequestFullScreen" as "requestFullscreen"]();
    } else if (wrapper["webkitRequestFullscreen" as "requestFullscreen"]) {
        wrapper["webkitRequestFullscreen" as "requestFullscreen"]();
    } else {
        console.log("Fullscreen API is not supported");
    }

    wrapper.setAttribute("data-fullscreen", "true");
    fullscreenButton?.classList.remove(ACTIVE_CONTROL_CLASS);
    fullscreenButton?.setAttribute("data-active", "false");
};

const exitFullscreen = ({
    elements: { fullscreenButton, wrapper },
}: Player) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document["webkitExitFullscreen" as "exitFullscreen"]) {
        document["webkitExitFullscreen" as "exitFullscreen"]();
    } else if (document["mozCancelFullScreen" as "exitFullscreen"]) {
        document["mozCancelFullScreen" as "exitFullscreen"]();
    } else if (document["msExitFullscreen" as "exitFullscreen"]) {
        document["msExitFullscreen" as "exitFullscreen"]();
    } else {
        console.log("Fullscreen API is not supported");
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
