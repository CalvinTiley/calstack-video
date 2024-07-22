import { ControlType } from "@typing/controls";

import { buildBaseControl } from "./utilities";

describe("control utilities", () => {
    describe("buildBaseControl", () => {
        it.each([
            ControlType.CAPTIONS,
            ControlType.FULL_SCREEN,
            ControlType.PIP,
            ControlType.PLAY,
        ])("adds correct classes for $0 type", (type) => {
            const control = buildBaseControl(type);

            expect(
                control.classList.contains("calstack-video-control"),
            ).toBeTruthy();

            expect(
                control.classList.contains(`calstack-video-control--${type}`),
            ).toBeTruthy();
        });
    });
});
