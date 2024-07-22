import { setupProgressBar } from ".";
import { fireEvent } from "@testing-library/dom";

import { onChange } from "./events";
import { Player } from "@/Player";

vi.mock("./events.ts", async (importOriginal) => ({
    ...importOriginal(),
    onChange: vi.fn(),
}));

describe("setupProgressBar", () => {
    const mockedOnChange = vi.mocked(onChange);
    const curriedOnChange = vi.fn();
    mockedOnChange.mockImplementation(() => curriedOnChange);

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("builds correct markup", () => {
        const mockPlayer = {
            elements: {},
        } as unknown as Player;

        const control = setupProgressBar(mockPlayer);

        expect(mockPlayer.elements).toStrictEqual(
            expect.objectContaining({
                progressBar: control,
            }),
        );

        expect(mockedOnChange).toHaveBeenCalledOnce();
        expect(curriedOnChange).not.toHaveBeenCalled();
    });

    it("triggers onChange handler", () => {
        const mockPlayer = {
            elements: {},
        } as unknown as Player;

        const control = setupProgressBar(mockPlayer);

        fireEvent.change(control.children[0], { target: { value: 80 } });

        expect(mockedOnChange).toHaveBeenCalledOnce();
        expect(curriedOnChange).toHaveBeenCalledOnce();
    });
});
