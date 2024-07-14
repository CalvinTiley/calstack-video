import { fullscreenIcon, pauseIcon, playIcon } from "@constants/icons";
import { PlayerOptions, TimeFormat } from "@typing/player";
import { isElement } from "@utils/dom";
import { logError } from "@utils/logger";

import { InteractionBuilder } from "./Interaction";
import { type Player } from "@/Player";

enum ControlType {
    FULL_SCREEN = "fullscreen",
    PAUSE = "pause",
    PLAY = "play",
}

export abstract class DOMBuilder extends InteractionBuilder {
    protected buildControl(type: ControlType) {
        const control = document.createElement("button");
        control.classList.add(
            "calstack-video-control",
            `calstack-video-control--${type}`,
        );

        switch (type) {
            case ControlType.FULL_SCREEN:
                control.innerHTML = fullscreenIcon;
                control.setAttribute("aria-label", "Open video in full screen");
                break;
            case ControlType.PAUSE:
                control.innerHTML = pauseIcon;
                control.setAttribute("aria-label", "Pause video");

                break;
            case ControlType.PLAY:
                control.innerHTML = playIcon;
                control.setAttribute("aria-label", "Play video");
                control.classList.add("calstack-video-control--active");
                control.setAttribute("data-active", "true");

                break;
        }

        return control;
    }

    protected buildControlBar(player: Player) {
        const controlBar = document.createElement("div");
        controlBar.classList.add("calstack-video-control-bar");

        const pauseButton = this.buildControl(ControlType.PAUSE);
        const playButton = this.buildControl(ControlType.PLAY);
        const progressBar = this.buildProgressBar();
        const fullscreenButton = this.buildControl(ControlType.FULL_SCREEN);
        const time = this.buildTime(player);

        player.elements.pauseButton = pauseButton;
        player.elements.playButton = playButton;
        player.elements.progressBar = progressBar;
        player.elements.fullscreenButton = fullscreenButton;
        player.elements.time = time;

        controlBar.appendChild(pauseButton);
        controlBar.appendChild(playButton);
        controlBar.appendChild(progressBar);
        controlBar.appendChild(time);
        controlBar.appendChild(fullscreenButton);

        return controlBar;
    }

    protected buildOverlay() {
        const overlay = document.createElement("div");

        overlay.classList.add("calstack-video-overlay");

        return overlay;
    }

    protected buildProgressBar() {
        const progressBar = document.createElement("input");
        progressBar.type = "range";
        progressBar.classList.add("calstack-video-progress-bar");

        progressBar.setAttribute("value", "0");
        progressBar.setAttribute("min", "0");
        progressBar.setAttribute("max", "100");

        return progressBar;
    }

    protected buildTime({
        elements: { video },
        options: { maxTimeFormat },
    }: Player) {
        const { currentTime: seconds } = video;

        const timeElement = document.createElement("span");
        timeElement.classList.add("calstack-video-time");

        const minutes = seconds < 60 ? 0 : seconds / 60;

        let formattedTime = "";

        if (maxTimeFormat === TimeFormat.MINUTES) {
            const formattedSeconds = seconds - minutes * 60;
            formattedTime = `${minutes}:${formattedSeconds}`;
        } else {
            const hours = minutes < 60 ? 0 : minutes / 60;
            const formattedMinutes = minutes - hours * 60;
            const formattedSeconds = seconds - (minutes + hours * 60);

            formattedTime =
                hours > 0
                    ? `${hours}:${formattedMinutes}:${formattedSeconds}`
                    : `${formattedMinutes}:${formattedSeconds}`;
        }

        timeElement.textContent = formattedTime;

        return timeElement;
    }

    protected buildVideo(options: PlayerOptions) {
        const { src } = options;

        const video = document.createElement("video");

        video.classList.add("calstack-video");
        video.src = src;

        return video;
    }

    protected buildWrapper(target: HTMLElement | string) {
        const wrapper =
            typeof target === "string"
                ? document.querySelector(target)
                : target;

        if (!isElement(wrapper)) {
            return logError(
                `Could not find a valid HTML element with the provided target: "${target}".`,
            );
        }

        wrapper.classList.add("calstack-video-wrapper");

        return wrapper;
    }
}
