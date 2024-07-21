import { onClick } from "./events";
import { Player } from "@/Player";

describe("play control events", () => {
    describe("onClick", () => {
        it("plays if paused", () => {
            const mockPauseFn = vi.fn();
            const mockPlayFn = vi.fn();

            const mockData = {
                elements: {
                    video: {
                        paused: true,
                        pause: mockPauseFn,
                        play: mockPlayFn,
                    },
                },
            } as unknown as Player;

            onClick(mockData)();

            expect(mockPauseFn).not.toHaveBeenCalled();
            expect(mockPlayFn).toHaveBeenCalledOnce();
        });

        it("pauses if playing", () => {
            const mockPauseFn = vi.fn();
            const mockPlayFn = vi.fn();

            const mockData = {
                elements: {
                    video: {
                        paused: false,
                        pause: mockPauseFn,
                        play: mockPlayFn,
                    },
                },
            } as unknown as Player;

            onClick(mockData)();

            expect(mockPauseFn).toHaveBeenCalledOnce();
            expect(mockPlayFn).not.toHaveBeenCalled();
        });
    });
});
