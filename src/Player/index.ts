import { defaultOptions } from "@constants/options";

import { PlayerOptions } from "../typing/player";

import { pauseIcon, playIcon } from "@/constants/icons";
import { isElement } from "@/utils/dom";
import { logError } from "@/utils/logger";

interface PlayerElements {
    controlBar?: HTMLDivElement;
    video: HTMLVideoElement;
    wrapper: HTMLElement;
}

enum ControlType {
    FULL_SCREEN = "full-screen",
    PAUSE = "pause",
    PLAY = "play",
}

export class Player {
    elements: PlayerElements;
    options: PlayerOptions;

    constructor(target: HTMLElement | string, options: PlayerOptions) {
        this.options = {
            ...defaultOptions,
            ...options,
        };

        const wrapper = this.buildWrapper(target);
        const video = this.buildVideo();

        this.elements = {
            wrapper,
            video,
        };

        this.init();
    }

    private init() {
        this.buildDOM();
        this.buildEvents();
    }

    private buildWrapper(target: HTMLElement | string) {
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

    private buildVideo() {
        const { src } = this.options;

        const video = document.createElement("video");

        video.classList.add("calstack-video");
        video.src = src;

        return video;
    }

    private buildDOM() {
        const { video, wrapper } = this.elements;
        const { controls } = this.options;

        wrapper.appendChild(this.buildOverlay());
        wrapper.appendChild(video);

        if (controls) {
            const controlBar = this.buildControlBar();

            this.elements.controlBar = controlBar;
            wrapper.appendChild(controlBar);
        }
    }

    private buildOverlay() {
        const overlay = document.createElement("div");

        overlay.classList.add("calstack-video-overlay");

        return overlay;
    }

    private buildEvents() {
        const { autoplay } = this.options;

        if (autoplay) this.elements.video.play();
    }

    private buildControl(type: ControlType) {
        const control = document.createElement("button");
        control.classList.add(
            "calstack-video-control",
            `calstack-video-control--${type}`,
        );

        switch (type) {
            case ControlType.FULL_SCREEN:
                control.innerHTML = "Full Screen";
                break;
            case ControlType.PAUSE:
                control.innerHTML = pauseIcon;

                if (this.options.autoplay) {
                    control.classList.add("calstack-video-control--active");
                }

                break;
            case ControlType.PLAY:
                control.innerHTML = playIcon;
                if (!this.options.autoplay) {
                    control.classList.add("calstack-video-control--active");
                }

                break;
        }

        return control;
    }

    private buildProgressBar() {
        const progressBar = document.createElement("input");
        progressBar.type = "range";
        progressBar.classList.add("calstack-video-progress-bar");

        progressBar.setAttribute("value", "0");
        progressBar.setAttribute("min", "0");
        progressBar.setAttribute("max", "100");

        return progressBar;
    }

    private buildControlBar() {
        const controlBar = document.createElement("div");
        controlBar.classList.add("calstack-video-control-bar");

        controlBar.appendChild(this.buildControl(ControlType.PAUSE));
        controlBar.appendChild(this.buildControl(ControlType.PLAY));
        controlBar.appendChild(this.buildProgressBar());
        controlBar.appendChild(this.buildControl(ControlType.FULL_SCREEN));

        return controlBar;
    }
}
