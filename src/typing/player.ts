import { TimeFormat } from "./time";

export interface PlayerOptions {
    autoplay?: boolean;
    controls?: boolean;
    maxTimeFormat?: `${TimeFormat}`;
    src: string;
    subtitles?: Partial<HTMLTrackElement>[];
}

export interface PlayerElements {
    captions?: HTMLButtonElement;
    controlBar?: HTMLDivElement;
    controlWrapper?: HTMLDivElement;
    fullscreenButton?: HTMLButtonElement;
    overlay?: HTMLDivElement;
    pipButton?: HTMLButtonElement;
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
