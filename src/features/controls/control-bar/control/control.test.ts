import { buildControl } from ".";
import { ControlType } from "@typing/controls";

import { buildCaptionsControl } from "./captions";
import { buildFullscreenControl } from "./fullscreen";
import { buildPIPControl } from "./pip";
import { buildPlayControl } from "./play";
import { Player } from "@/Player";

vi.mock("./captions", () => ({
    buildCaptionsControl: vi.fn(),
}));
vi.mock("./fullscreen", () => ({
    buildFullscreenControl: vi.fn(),
}));
vi.mock("./pip", () => ({
    buildPIPControl: vi.fn(),
}));
vi.mock("./play", () => ({
    buildPlayControl: vi.fn(),
}));

describe("control", () => {
    const mockCaptionsControlFn = vi.mocked(buildCaptionsControl);
    const mockFullscreenControlFn = vi.mocked(buildFullscreenControl);
    const mockPIPControlFn = vi.mocked(buildPIPControl);
    const mockPlayControlFn = vi.mocked(buildPlayControl);

    const player = {} as Player;

    it.each([
        { fn: mockCaptionsControlFn, type: ControlType.CAPTIONS },
        { fn: mockFullscreenControlFn, type: ControlType.FULL_SCREEN },
        { fn: mockPIPControlFn, type: ControlType.PIP },
        { fn: mockPlayControlFn, type: ControlType.PLAY },
    ])("calls $fn when passed type: $type", ({ fn, type }) => {
        buildControl({ player, type });

        expect(fn).toHaveBeenCalledOnce();
    });
});
