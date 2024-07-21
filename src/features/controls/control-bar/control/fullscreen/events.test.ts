import { toggleFullscreen } from "@utils/events";

import { onClick } from "./events";
import { Player } from "@/Player";

vi.mock("@utils/events", (original) => ({
    ...original,
    toggleFullscreen: vi.fn(),
}));

describe("fullscreen control events", () => {
    const mockedToggleFullscreen = vi.mocked(toggleFullscreen);

    it("onClick", () => {
        const mockData = {
            elements: {
                video: {
                    textTracks: [{ mode: "showing" }, { mode: "hidden" }],
                },
            },
        } as unknown as Player;

        onClick(mockData)();

        expect(mockedToggleFullscreen).toHaveBeenCalledWith(mockData);
    });
});
