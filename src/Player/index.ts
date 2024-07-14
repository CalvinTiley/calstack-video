import { DOMBuilder } from "@builders/DOM";
import { defaultOptions } from "@constants/options";

import { PlayerOptions } from "../typing/player";

interface PlayerElements {
    controlBar?: HTMLDivElement;
    fullscreenButton?: HTMLButtonElement;
    pauseButton?: HTMLButtonElement;
    playButton?: HTMLButtonElement;
    progressBar?: HTMLInputElement;
    time?: HTMLSpanElement;
    video: HTMLVideoElement;
    wrapper: HTMLElement;
}

export class Player extends DOMBuilder {
    elements: PlayerElements;
    options: PlayerOptions;

    constructor(target: HTMLElement | string, options: PlayerOptions) {
        super();

        this.options = {
            ...defaultOptions,
            ...options,
        };

        const wrapper = this.buildWrapper(target);
        const video = this.buildVideo(this.options);

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

    private buildDOM() {
        const { video, wrapper } = this.elements;
        const { controls } = this.options;

        wrapper.appendChild(this.buildOverlay());
        wrapper.appendChild(video);

        if (controls) {
            const controlBar = this.buildControlBar(this);

            this.elements.controlBar = controlBar;
            wrapper.appendChild(controlBar);
        }
    }

    private buildEvents() {
        const { autoplay } = this.options;

        this.buildPlayPauseEvents(this);
        this.buildProgressBarEvents(this);
        this.buildFullscreenEvents(this);

        if (autoplay) this.elements.video.play();
    }
}
