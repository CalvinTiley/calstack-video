import { DOMBuilder } from "@builders/DOM";
import { defaultOptions } from "@constants/options";
import type { PlayerElements, PlayerOptions } from "@typing/player";

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

        this.buildSubtitles(this);
    }

    private buildEvents() {
        const { autoplay } = this.options;

        this.elements.video.addEventListener("loadedmetadata", () => {
            this.buildPlayPauseEvents(this);
            this.buildProgressBarEvents(this);
            this.buildVideoTimeEvents(this);
            this.buildFullscreenEvents(this);
            this.buildCaptionEvents(this);
            this.buildPipEvents(this);

            if (autoplay) this.elements.video.play();
        });
    }
}
