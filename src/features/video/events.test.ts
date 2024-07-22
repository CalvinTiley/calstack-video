import { ACTIVE_CONTROL_CLASS } from "@constants/controls";
import { TimeFormat } from "@typing/time";
import * as eventUtils from "@utils/events";

import { onClick, onPause, onPlay, onTimeUpdate } from "./events";
import { Player } from "@/Player";

describe("video events", () => {
    const mockWrapperSetAttributeFn = vi.fn();
    const mockPlayButtonSetAttributeFn = vi.fn();
    const mockPlayButtonClassListToggleFn = vi.fn();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("onPlay", () => {
        const player = {
            elements: {
                playButton: {
                    classList: {
                        remove: mockPlayButtonClassListToggleFn,
                    },
                    setAttribute: mockPlayButtonSetAttributeFn,
                },
                wrapper: {
                    setAttribute: mockWrapperSetAttributeFn,
                },
            },
        } as unknown as Player;

        onPlay(player)();

        expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
            "data-paused",
            "false",
        );
        expect(mockPlayButtonSetAttributeFn).toHaveBeenCalledTimes(2);
        expect(mockPlayButtonSetAttributeFn).toHaveBeenCalledWith(
            "data-active",
            "false",
        );
        expect(mockPlayButtonSetAttributeFn).toHaveBeenCalledWith(
            "aria-label",
            "Pause video",
        );

        expect(mockPlayButtonClassListToggleFn).toHaveBeenCalledWith(
            "calstack-video-control--active",
        );
    });

    it("onPause", () => {
        const player = {
            elements: {
                playButton: {
                    classList: {
                        add: mockPlayButtonClassListToggleFn,
                    },
                    setAttribute: mockPlayButtonSetAttributeFn,
                },
                wrapper: {
                    setAttribute: mockWrapperSetAttributeFn,
                },
            },
        } as unknown as Player;

        onPause(player)();

        expect(mockWrapperSetAttributeFn).toHaveBeenCalledWith(
            "data-paused",
            "true",
        );
        expect(mockPlayButtonSetAttributeFn).toHaveBeenCalledTimes(2);
        expect(mockPlayButtonSetAttributeFn).toHaveBeenCalledWith(
            "data-active",
            "true",
        );
        expect(mockPlayButtonSetAttributeFn).toHaveBeenCalledWith(
            "aria-label",
            "Play video",
        );

        expect(mockPlayButtonClassListToggleFn).toHaveBeenCalledWith(
            ACTIVE_CONTROL_CLASS,
        );
    });

    describe("onClick", () => {
        const mockToggleFullscreen = vi.fn();
        vi.spyOn(eventUtils, "toggleFullscreen").mockImplementationOnce(
            mockToggleFullscreen,
        );

        it("toggles fullscreen if click count is greater than 1", () => {
            const player = {} as Player;

            onClick(player)({ detail: 2 } as unknown as Event);

            expect(mockToggleFullscreen).toHaveBeenLastCalledWith(player);
        });

        it("does not toggle fullscreen if click count is less than 2", () => {
            const player = {} as Player;

            onClick(player)({ detail: 1 } as unknown as Event);
            onClick(player)({ detail: 0 } as unknown as Event);

            expect(mockToggleFullscreen).not.toHaveBeenCalled();
        });
    });

    describe("onTimeUpdate", () => {
        it("builds markup correctly", () => {
            const player = {
                elements: {
                    progressInput: {},
                    time: {
                        current: {
                            textContent: "Nothing",
                        },
                    },
                    video: {
                        currentTime: 2000,
                        duration: 10000,
                    },
                },
                options: {
                    maxTimeFormat: TimeFormat.HOURS,
                },
            } as unknown as Player;

            onTimeUpdate(player)();

            expect(player.elements.progressInput).toBeDefined();
            expect(player.elements.progressInput?.value).toBe("20.00");
            expect(player.elements.time?.current?.textContent).toBe("33:20");
        });

        it("does not update progress input if it's undefined", () => {
            const player = {
                elements: {
                    time: {
                        current: {
                            textContent: "Nothing",
                        },
                    },
                    video: {
                        currentTime: 2000,
                        duration: 10000,
                    },
                },
                options: {
                    maxTimeFormat: TimeFormat.HOURS,
                },
            } as unknown as Player;

            onTimeUpdate(player)();

            expect(player.elements.progressInput?.value).toBeUndefined();
            expect(player.elements.time?.current?.textContent).toBe("33:20");
        });

        it("does not update current time text content if it's undefined", () => {
            const player = {
                elements: {
                    video: {
                        currentTime: 2000,
                        duration: 10000,
                    },
                },
                options: {
                    maxTimeFormat: TimeFormat.HOURS,
                },
            } as unknown as Player;

            onTimeUpdate(player)();

            expect(player.elements.progressInput?.value).toBeUndefined();
            expect(player.elements.time?.current?.textContent).toBeUndefined();
        });
    });
});
