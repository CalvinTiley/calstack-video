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

    private enterFullscreen({
        elements: { exitFullscreenButton, fullscreenButton, wrapper },
    }: Player) {
        if (wrapper.requestFullscreen) {
            wrapper.requestFullscreen();
        } else if (wrapper["msRequestFullscreen" as "requestFullscreen"]) {
            wrapper["msRequestFullscreen" as "requestFullscreen"]();
        } else if (wrapper["mozRequestFullScreen" as "requestFullscreen"]) {
            wrapper["mozRequestFullScreen" as "requestFullscreen"]();
        } else if (wrapper["webkitRequestFullscreen" as "requestFullscreen"]) {
            wrapper["webkitRequestFullscreen" as "requestFullscreen"]();
        } else {
            console.log("Fullscreen API is not supported");
        }

        wrapper.setAttribute("data-fullscreen", "true");
        fullscreenButton?.classList.remove(ACTIVE_CONTROL_CLASS);
        fullscreenButton?.setAttribute("data-active", "false");
        exitFullscreenButton?.classList.add(ACTIVE_CONTROL_CLASS);
        exitFullscreenButton?.setAttribute("data-active", "true");
    }

    private exitFullscreen({
        elements: { exitFullscreenButton, fullscreenButton, wrapper },
    }: Player) {
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

        wrapper.setAttribute("data-fullscreen", "false");
        exitFullscreenButton?.classList.remove(ACTIVE_CONTROL_CLASS);
        exitFullscreenButton?.setAttribute("data-active", "false");
        fullscreenButton?.classList.add(ACTIVE_CONTROL_CLASS);
        fullscreenButton?.setAttribute("data-active", "true");
    }

    private toggleFullscreen(player: Player) {
        if (this.isFullscreen()) {
            this.exitFullscreen(player);
        } else {
            this.enterFullscreen(player);
        }
    }

    protected buildFullscreenEvents(player: Player) {
        const {
            options,
            elements: { exitFullscreenButton, fullscreenButton, video },
        } = player;

        if (options.controls) {
            fullscreenButton?.addEventListener("click", () => {
                this.enterFullscreen(player);
            });

            exitFullscreenButton?.addEventListener("click", () => {
                this.exitFullscreen(player);
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
        elements: { pauseButton, playButton, video, wrapper },
        options,
    }: Player) {
        if (options.controls) {
            video.addEventListener("play", () => {
                wrapper?.setAttribute("data-paused", "false");

                pauseButton?.setAttribute("data-active", "true");
                pauseButton?.classList.add(ACTIVE_CONTROL_CLASS);

                playButton?.setAttribute("data-active", "false");
                playButton?.classList.remove(ACTIVE_CONTROL_CLASS);
            });

            video.addEventListener("pause", () => {
                wrapper?.setAttribute("data-paused", "true");
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
        elements: { progressInput, video },
        options,
    }: Player) {
        if (options.controls) {
            progressInput?.addEventListener("change", () => {
                const newTime =
                    (video.duration * Number(progressInput.value)) / 100;

                video.currentTime = newTime;
            });
        }
    }

    protected buildVideoTimeEvents(player: Player) {
        const {
            elements: { video, progressInput, time },
            options: { maxTimeFormat },
        } = player;

        video.addEventListener("timeupdate", () => {
            const { currentTime, duration } = video;

            const newProgressValue = ((currentTime / duration) * 100).toFixed(
                2,
            );

            if (progressInput) {
                progressInput.value = newProgressValue;
            }

            if (time?.current) {
                time.current.textContent = player.buildTime(
                    video.currentTime,
                    maxTimeFormat,
                );
            }
        });
    }
}
