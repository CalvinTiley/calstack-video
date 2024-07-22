import { setupControls } from ".";
import { buildWrapper } from "@features/video";
import { TimeFormat } from "@typing/time";

import { Player } from "@/Player";

describe("setupControls", () => {
    it("builds markup correctly", () => {
        const player = {
            elements: {
                wrapper: buildWrapper(document.createElement("div")),
                video: {
                    currentTime: 0,
                    duration: 60,
                },
            },
            options: {
                maxTimeFormat: TimeFormat.HOURS,
            },
        } as unknown as Player;

        const controlWrapper = setupControls(player);

        expect(controlWrapper.tagName.toLowerCase()).toBe("div");
        expect(
            controlWrapper.classList.contains("calstack-video-control-wrapper"),
        ).toBeTruthy();
    });
});
