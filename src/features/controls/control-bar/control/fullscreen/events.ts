import { toggleFullscreen } from "@utils/events";

import { Player } from "@/Player";

export const onClick = (player: Player) => () => {
    toggleFullscreen(player);
};
