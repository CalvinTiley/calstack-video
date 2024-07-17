import { DOMBuilder } from "@builders/DOM";
import { defaultOptions } from "@constants/options";

import { PlayerOptions } from "../typing/player";

interface PlayerElements {
    controlBar?: HTMLDivElement;
    controlWrapper?: HTMLDivElement;
    exitFullscreenButton?: HTMLButtonElement;
    fullscreenButton?: HTMLButtonElement;
    pauseButton?: HTMLButtonElement;
    playButton?: HTMLButtonElement;
    progressBar?: HTMLDivElement;
    progressInput?: HTMLInputElement;
    spacer?: HTMLDivElement;
    time?: {
        current?: HTMLSpanElement;
        divider?: HTMLSpanElement;
        duration?: HTMLSpanElement;
    };
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

        video.addEventListener("loadedmetadata", () => {
            if (controls) {
                this.buildControlBar(this);
            }
        });
    }

    private buildEvents() {
        const { autoplay } = this.options;

        this.elements.video.addEventListener("loadedmetadata", () => {
            this.buildPlayPauseEvents(this);
            this.buildProgressBarEvents(this);
            this.buildVideoTimeEvents(this);
            this.buildFullscreenEvents(this);

            if (autoplay) this.elements.video.play();
        });
    }
}
