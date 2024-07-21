import { ACTIVE_CONTROL_CLASS } from "@constants/controls";

import { onPause, onPlay } from "./events";
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
            ACTIVE_CONTROL_CLASS,
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
});
