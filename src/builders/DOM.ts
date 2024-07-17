import {
    captionsIcon,
    exitFullscreenIcon,
    fullscreenIcon,
    pauseIcon,
    playIcon,
} from "@constants/icons";
import { PlayerOptions, TimeFormat } from "@typing/player";
import { isElement } from "@utils/dom";
import { logError } from "@utils/logger";

import { InteractionBuilder } from "./Interaction";
import { type Player } from "@/Player";

enum ControlType {
    CAPTIONS = "captions",
    EXIT_SCREEN = "exit-fullscreen",
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
            case ControlType.CAPTIONS:
                control.innerHTML = captionsIcon;
                control.setAttribute("aria-label", "Toggle subtitles/captions");
                control.setAttribute("data-active", "false");
                break;
            case ControlType.EXIT_SCREEN:
                control.innerHTML = exitFullscreenIcon;
                control.setAttribute("aria-label", "Exit fullscreen mode.");
                control.setAttribute("data-active", "false");
                break;
            case ControlType.FULL_SCREEN:
                control.innerHTML = fullscreenIcon;
                control.setAttribute("aria-label", "Enter fullscreen mode.");
                control.setAttribute("data-active", "true");
                control.classList.add("calstack-video-control--active");
                break;
            case ControlType.PAUSE:
                control.innerHTML = pauseIcon;
                control.setAttribute("aria-label", "Pause video.");
                control.setAttribute("data-active", "false");
                break;
            case ControlType.PLAY:
                control.innerHTML = playIcon;
                control.setAttribute("aria-label", "Play video.");
                control.setAttribute("data-active", "true");
                control.classList.add("calstack-video-control--active");
                break;
        }

        return control;
    }

    protected buildControlBar(player: Player) {
        const {
            elements: { wrapper },
        } = player;

        const controlWrapper = document.createElement("div");
        controlWrapper.classList.add("calstack-video-control-wrapper");

        const controlBar = document.createElement("div");
        controlBar.classList.add("calstack-video-control-bar");

        const progressBar = this.buildProgressBar(player);

        const pauseButton = this.buildControl(ControlType.PAUSE);
        const playButton = this.buildControl(ControlType.PLAY);
        const fullscreenButton = this.buildControl(ControlType.FULL_SCREEN);
        const exitFullscreenButton = this.buildControl(ControlType.EXIT_SCREEN);
        const captionsButton = this.buildControl(ControlType.CAPTIONS);
        const time = this.buildTimeElements(player);

        const spacer = document.createElement("div");
        spacer.classList.add("calstack-video-spacer");

        player.elements.pauseButton = pauseButton;
        player.elements.playButton = playButton;
        player.elements.spacer = spacer;
        player.elements.captions = captionsButton;
        player.elements.fullscreenButton = fullscreenButton;
        player.elements.exitFullscreenButton = exitFullscreenButton;

        controlBar.appendChild(pauseButton);
        controlBar.appendChild(playButton);
        controlBar.appendChild(time);
        controlBar.appendChild(spacer);
        controlBar.appendChild(captionsButton);
        controlBar.appendChild(fullscreenButton);
        controlBar.appendChild(exitFullscreenButton);

        controlWrapper.appendChild(progressBar);
        controlWrapper.appendChild(controlBar);

        wrapper.appendChild(controlWrapper);
    }

    protected buildOverlay() {
        const overlay = document.createElement("div");

        overlay.classList.add("calstack-video-overlay");

        return overlay;
    }

    protected buildProgressBar({ elements }: Player) {
        const progressBar = document.createElement("div");
        progressBar.classList.add("calstack-video-progress-bar");
        elements.progressBar = progressBar;

        const progressInput = document.createElement("input");
        progressInput.type = "range";
        progressInput.classList.add("calstack-video-progress-input");
        elements.progressInput = progressInput;

        progressInput.setAttribute("value", "0");
        progressInput.setAttribute("min", "0");
        progressInput.setAttribute("max", "100");

        progressBar.appendChild(progressInput);

        return progressBar;
    }

    private padTime(value: number) {
        return `${value}`.padStart(2, "0");
    }

    private getTimeUnits(
        totalSeconds: number,
        maxTimeFormat: PlayerOptions["maxTimeFormat"],
    ) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(
            maxTimeFormat === TimeFormat.HOURS
                ? (totalSeconds % 3600) / 60
                : totalSeconds / 60,
        );
        const seconds = Math.floor(
            (totalSeconds % (maxTimeFormat === TimeFormat.HOURS ? 3600 : 60)) %
                60,
        );

        return {
            hours,
            minutes,
            seconds,
        };
    }

    public buildTime(
        totalSeconds: number,
        maxTimeFormat: PlayerOptions["maxTimeFormat"],
    ) {
        const { seconds, minutes, hours } = this.getTimeUnits(
            totalSeconds,
            maxTimeFormat,
        );

        let formattedTime = `${this.padTime(minutes)}:${this.padTime(seconds)}`;

        if (maxTimeFormat === TimeFormat.HOURS && hours > 0) {
            formattedTime = `${this.padTime(hours)}:${formattedTime}`;
        }

        return formattedTime;
    }

    protected buildTimeElement(
        totalSeconds: number,
        maxTimeFormat: PlayerOptions["maxTimeFormat"],
        type: "currentTime" | "duration",
    ) {
        const timeUnitElement = document.createElement("span");
        timeUnitElement.classList.add("calstack-video-time-unit");
        timeUnitElement.setAttribute("data-time-unit", type);

        timeUnitElement.textContent = this.buildTime(
            totalSeconds,
            maxTimeFormat,
        );

        return timeUnitElement;
    }

    protected buildTimeElements(player: Player) {
        const {
            elements: { video },
            options: { maxTimeFormat },
        } = player;

        const { currentTime, duration } = video;

        const currentTimeElement = this.buildTimeElement(
            currentTime,
            maxTimeFormat,
            "currentTime",
        );

        const timeElement = document.createElement("div");
        timeElement.classList.add("calstack-video-time");

        const timeDividerElement = document.createElement("span");
        timeDividerElement.classList.add("calstack-video-time-divider");
        timeDividerElement.textContent = "/";

        const durationElement = this.buildTimeElement(
            duration,
            maxTimeFormat,
            "duration",
        );

        player.elements.time = {
            current: currentTimeElement,
            divider: timeDividerElement,
            duration: durationElement,
        };

        timeElement.appendChild(currentTimeElement);
        timeElement.appendChild(timeDividerElement);
        timeElement.appendChild(durationElement);

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

    protected buildSubtitles(player: Player) {
        if (player.options.subtitles) {
            player.options.subtitles.forEach((sub) => {
                const trackElement = document.createElement("track");

                for (const property of Object.keys(sub)) {
                    const value = sub[property as keyof HTMLTrackElement];

                    if (property !== "default" || value) {
                        trackElement.setAttribute(property, `${value}`);
                    }
                }

                player.elements.video.appendChild(trackElement);
            });

            Array.from(player.elements.video.textTracks).forEach(
                (track) => (track.mode = "hidden"),
            );
        }
    }
}
