import { onClick } from "./events";
import { Player } from "@/Player";

describe("captions control events", () => {
    it("onClick", () => {
        const mockData = {
            elements: {
                video: {
                    textTracks: [{ mode: "showing" }, { mode: "hidden" }],
                },
            },
        } as unknown as Player;

        onClick(mockData)();

        expect(mockData.elements.video.textTracks[0].mode).toBe("hidden");
        expect(mockData.elements.video.textTracks[1].mode).toBe("showing");
    });
});
