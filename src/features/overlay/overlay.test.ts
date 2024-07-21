import { setupOverlay } from ".";
import { buildWrapper } from "@features/video";
import userEvent from "@testing-library/user-event";

import { onClick } from "./events";
import { Player } from "@/Player";

vi.mock("./events.ts", async (importOriginal) => ({
    ...importOriginal(),
    onClick: vi.fn(),
}));

describe("setupOverlay", () => {
    const mockedOnClick = vi.mocked(onClick);
    const curriedOnClick = vi.fn();
    mockedOnClick.mockImplementation(() => curriedOnClick);
    const user = userEvent.setup();

    afterEach(() => {
        vi.clearAllMocks();
    });

    const player = {
        elements: {
            wrapper: buildWrapper(document.createElement("div")),
        },
    } as unknown as Player;

    it("builds markup properly", () => {
        const overlay = setupOverlay(player);

        expect(overlay.tagName.toLowerCase()).toBe("div");
        expect(
            overlay.classList.contains("calstack-video-overlay"),
        ).toBeTruthy();
        expect(
            overlay.children[0].classList.contains("calstack-video-big-play"),
        ).toBeTruthy();

        expect(mockedOnClick).toHaveBeenCalledOnce();
        expect(curriedOnClick).not.toHaveBeenCalled();
    });

    it("triggers handler onClick", async () => {
        const overlay = setupOverlay(player);

        await user.click(overlay);

        expect(mockedOnClick).toHaveBeenCalledOnce();
        expect(curriedOnClick).toHaveBeenCalledOnce();
    });
});
