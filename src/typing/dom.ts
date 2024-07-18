export interface PlayerElements {
    captions?: HTMLButtonElement;
    controlBar?: HTMLDivElement;
    controlWrapper?: HTMLDivElement;
    exitFullscreenButton?: HTMLButtonElement;
    fullscreenButton?: HTMLButtonElement;
    pauseButton?: HTMLButtonElement;
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
