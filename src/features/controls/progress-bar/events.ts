import { Player } from "@/Player";

export const onChange = (player: Player) => () => {
    const { progressInput, video } = player.elements;

    const newTime = (video.duration * Number(progressInput?.value)) / 100;

    video.currentTime = newTime;
};
