import { setupControls } from "@features/controls";
import { setupOverlay } from "@features/overlay";
import { setupSubtitles } from "@features/subtitles";
import { buildVideo, buildWrapper, setupVideo } from "@features/video";
import type { PlayerElements, PlayerOptions } from "@typing/player";
import { TimeFormat } from "@typing/time";

const defaultOptions = {
    autoplay: false,
    controls: true,
    maxTimeFormat: TimeFormat.HOURS,
} satisfies Partial<PlayerOptions>;

export class Player {
    elements: PlayerElements;
    options: PlayerOptions;

    constructor(target: HTMLElement | string, options: PlayerOptions) {
        this.options = {
            ...defaultOptions,
            ...options,
        };

        const wrapper = buildWrapper(target);
        const video = buildVideo(this.options);

        this.elements = {
            wrapper,
            video,
        };

        this.init();
    }

    private init() {
        this.elements.video.addEventListener("loadedmetadata", () => {
            this.elements.wrapper.appendChild(this.elements.video);

            setupSubtitles(this);
            setupOverlay(this);

            if (this.options.controls) {
                setupControls(this);
            }

            setupVideo(this);
        });
    }
}
