import { onClick } from "./events";
import { Player } from "@/Player";

describe("overlay events", () => {
    it("onClick", () => {
        const mockPlayFn = vi.fn();

        const player = {
            elements: {
                video: {
                    play: mockPlayFn,
                },
            },
        } as unknown as Player;

        onClick(player)();

        expect(mockPlayFn).toHaveBeenCalledOnce();
    });
});
