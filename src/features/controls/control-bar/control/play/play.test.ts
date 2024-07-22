import { buildPlayControl } from ".";
import userEvent from "@testing-library/user-event";

import { onClick } from "./events";
import { Player } from "@/Player";

vi.mock("./events.ts", async (importOriginal) => ({
    ...importOriginal(),
    onClick: vi.fn(),
}));

describe("play control", () => {
    const mockedOnClick = vi.mocked(onClick);
    const curriedOnClick = vi.fn();
    mockedOnClick.mockImplementation(() => curriedOnClick);

    const user = userEvent.setup();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("builds control markup", () => {
        const mockPlayer = {
            elements: {},
        } as unknown as Player;

        const control = buildPlayControl(mockPlayer);

        expect(mockPlayer.elements).toStrictEqual(
            expect.objectContaining({
                playButton: control,
            }),
        );

        expect(control.children[0]?.getAttribute("id")).toBe(
            "calstack-video-play-icon",
        );
        expect(control.children[1]?.getAttribute("id")).toBe(
            "calstack-video-pause-icon",
        );

        expect(control.getAttribute("aria-label")).toStrictEqual("Play video");
        expect(control.getAttribute("data-active")).toStrictEqual("false");

        expect(mockedOnClick).toHaveBeenCalledOnce();
        expect(curriedOnClick).not.toHaveBeenCalled();
    });

    it("triggers handler onClick", async () => {
        const mockPlayer = {
            elements: {},
        } as unknown as Player;

        const control = buildPlayControl(mockPlayer);

        await user.click(control);

        expect(mockedOnClick).toHaveBeenCalledOnce();
        expect(curriedOnClick).toHaveBeenCalledOnce();
    });
});
