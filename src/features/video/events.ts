import { ACTIVE_CONTROL_CLASS } from "@constants/controls";
import { buildTime } from "@utils/dom";
import { toggleFullscreen } from "@utils/events";

import { Player } from "@/Player";

export const onPlay = (player: Player) => () => {
    const { playButton, wrapper } = player.elements;
    wrapper.setAttribute("data-paused", "false");
    playButton?.setAttribute("data-active", "false");
    playButton?.setAttribute("aria-label", "Pause video");
    playButton?.classList.remove(ACTIVE_CONTROL_CLASS);
};

export const onPause = (player: Player) => () => {
    const { playButton, wrapper } = player.elements;
    wrapper.setAttribute("data-paused", "true");
    playButton?.setAttribute("data-active", "true");
    playButton?.setAttribute("aria-label", "Play video");
    playButton?.classList.add(ACTIVE_CONTROL_CLASS);
};

export const onClick = (player: Player) => (event: Event) => {
    const clickCount = (event as unknown as { detail: number }).detail;

    if (clickCount > 1) {
        toggleFullscreen(player);
    }
};

export const onTimeUpdate = (player: Player) => () => {
    const { progressInput, time, video } = player.elements;
    const { currentTime, duration } = video;

    const newProgressValue = ((currentTime / duration) * 100).toFixed(2);

    if (progressInput) {
        progressInput.value = newProgressValue;
    }

    if (time?.current) {
        time.current.textContent = buildTime(
            video.currentTime,
            player.options.maxTimeFormat,
        );
    }
};
