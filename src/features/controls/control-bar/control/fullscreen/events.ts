import { toggleFullscreen } from "@utils/events";

import { Player } from "@/Player";

export const onClick = (control: HTMLButtonElement, player: Player) => {
    control.addEventListener("click", () => {
        toggleFullscreen(player);
    });
};
