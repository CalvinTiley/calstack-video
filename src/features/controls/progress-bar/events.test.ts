import { onChange } from "./events";
import { Player } from "@/Player";

describe("progress bar events", () => {
    it("onChange", () => {
        const player = {
            elements: {
                progressInput: {
                    value: 10,
                },
                video: {
                    duration: 30,
                },
            },
        } as unknown as Player;

        onChange(player)();

        expect(player.elements.video.currentTime).toBe(3);
    });
});
