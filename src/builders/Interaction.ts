import { ACTIVE_CONTROL_CLASS } from "@constants/dom";

import { type Player } from "@/Player";

export abstract class InteractionBuilder {
    private isFullscreen() {
        return (
            document.fullscreenElement ||
            document["webkitFullscreenElement" as "fullscreenElement"] ||
            document["mozFullScreenElement" as "fullscreenElement"]
        );
    }

    private enterFullscreen(element: HTMLElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element["msRequestFullscreen" as "requestFullscreen"]) {
            element["msRequestFullscreen" as "requestFullscreen"]();
        } else if (element["mozRequestFullScreen" as "requestFullscreen"]) {
            element["mozRequestFullScreen" as "requestFullscreen"]();
        } else if (element["webkitRequestFullscreen" as "requestFullscreen"]) {
            element["webkitRequestFullscreen" as "requestFullscreen"]();
        } else {
            console.log("Fullscreen API is not supported");
        }
    }

    private exitFullscreen() {
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
    }

    private toggleFullscreen({ elements: { wrapper } }: Player) {
        this.isFullscreen()
            ? this.exitFullscreen()
            : this.enterFullscreen(wrapper);
    }

    protected buildFullscreenEvents(player: Player) {
        const {
            options,
            elements: { fullscreenButton, video },
        } = player;

        if (options.controls) {
            fullscreenButton?.addEventListener("click", () => {
                this.toggleFullscreen(player);
            });

            video.addEventListener("click", (event: Event) => {
                const clickCount = (event as unknown as { detail: number })
                    .detail;

                if (clickCount > 1) {
                    this.toggleFullscreen(player);
                }
            });
        }
    }

    protected buildPlayPauseEvents({
        elements: { video, pauseButton, playButton },
        options,
    }: Player) {
        if (options.controls) {
            video.addEventListener("play", () => {
                pauseButton?.setAttribute("data-active", "true");
                pauseButton?.classList.add(ACTIVE_CONTROL_CLASS);

                playButton?.setAttribute("data-active", "false");
                playButton?.classList.remove(ACTIVE_CONTROL_CLASS);
            });

            video.addEventListener("pause", () => {
                playButton?.setAttribute("data-active", "true");
                playButton?.classList.add(ACTIVE_CONTROL_CLASS);

                pauseButton?.setAttribute("data-active", "false");
                pauseButton?.classList.remove(ACTIVE_CONTROL_CLASS);
            });

            let clickCount = 0;

            video.addEventListener("click", (event) => {
                clickCount = (event as unknown as { detail: number }).detail;

                setTimeout(() => {
                    if (clickCount < 2) {
                        video.pause();
                    }
                }, 200);
            });

            pauseButton?.addEventListener("click", () => {
                video.pause();
            });

            playButton?.addEventListener("click", () => {
                video.play();
            });
        }
    }

    protected buildProgressBarEvents({
        elements: { progressBar, video },
        options,
    }: Player) {
        if (options.controls) {
            progressBar?.addEventListener("change", () => {
                const newTime =
                    (video.duration * Number(progressBar.value)) / 100;

                video.currentTime = newTime;
            });
        }
    }
}
