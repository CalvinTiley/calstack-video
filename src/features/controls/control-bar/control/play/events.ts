import { Player } from "@/Player";

export const onClick =
    ({ elements: { video } }: Player) =>
    () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };
