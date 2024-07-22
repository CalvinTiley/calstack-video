import { buildPIPControl } from ".";
import userEvent from "@testing-library/user-event";

import { onClick } from "./events";
import { Player } from "@/Player";

vi.mock("./events.ts", async (importOriginal) => ({
    ...importOriginal(),
    onClick: vi.fn(),
}));

describe("pip control", () => {
    const mockedOnClick = vi.mocked(onClick);
    const curriedOnClick = vi.fn();
    mockedOnClick.mockImplementation(() => curriedOnClick);

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("builds control markup", () => {
        const mockPlayer = {
            elements: {},
        } as unknown as Player;

        const control = buildPIPControl(mockPlayer);

        expect(mockPlayer.elements).toStrictEqual(
            expect.objectContaining({
                pipButton: control,
            }),
        );

        expect(control.children[0]?.getAttribute("id")).toBe(
            "calstack-video-picture-in-picture-icon",
        );
        expect(control.getAttribute("aria-label")).toBe(
            "Enter picture in picture mode.",
        );
        expect(control.getAttribute("data-active")).toBe("false");

        expect(mockedOnClick).toHaveBeenCalledOnce();
        expect(curriedOnClick).not.toHaveBeenCalled();
    });

    it("triggers handler onClick", async () => {
        const user = userEvent.setup();

        const mockPlayer = {
            elements: {},
        } as unknown as Player;

        const control = buildPIPControl(mockPlayer);

        await user.click(control);

        expect(mockedOnClick).toHaveBeenCalledOnce();
        expect(curriedOnClick).toHaveBeenCalledOnce();
    });
});
