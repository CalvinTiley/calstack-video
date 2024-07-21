import { Player } from "@/Player";

export const onClick = (player: Player) => () => {
    player.elements.video.play();
};
