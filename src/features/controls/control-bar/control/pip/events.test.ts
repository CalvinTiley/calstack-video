import { onClick } from "./events";
import { Player } from "@/Player";

describe("picture in picture control events", () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.resetAllMocks();
    });

    describe("onClick", () => {
        it("exits picture in picture mode if active", () => {
            const mockRequestPIPFn = vi.fn();
            const mockExitPIPFn = vi.fn();
            const mockSetPIPAttribute = vi.fn();

            vi.stubGlobal("document", {
                pictureInPictureElement: true,
                exitPictureInPicture: mockExitPIPFn,
            });

            const mockData = {
                elements: {
                    pipButton: {
                        setAttribute: mockSetPIPAttribute,
                    },
                    video: {
                        requestPictureInPicture: mockRequestPIPFn,
                    },
                },
            } as unknown as Player;

            onClick(mockData)();

            expect(mockRequestPIPFn).not.toHaveBeenCalled();
            expect(mockExitPIPFn).toHaveBeenCalledOnce();

            expect(mockSetPIPAttribute).toHaveBeenCalledTimes(2);
            expect(mockSetPIPAttribute).toHaveBeenCalledWith(
                "data-active",
                "false",
            );
            expect(mockSetPIPAttribute).toHaveBeenCalledWith(
                "aria-label",
                "Enter picture in picture mode.",
            );
        });

        it("enters picture in picture mode if not already active", () => {
            const mockRequestPIPFn = vi.fn();
            const mockExitPIPFn = vi.fn();
            const mockSetPIPAttribute = vi.fn();

            vi.stubGlobal("document", {
                pictureInPictureElement: false,
                exitPictureInPicture: mockExitPIPFn,
            });

            const mockData = {
                elements: {
                    pipButton: {
                        setAttribute: mockSetPIPAttribute,
                    },
                    video: {
                        requestPictureInPicture: mockRequestPIPFn,
                    },
                },
            } as unknown as Player;

            onClick(mockData)();

            expect(mockRequestPIPFn).toHaveBeenCalled();
            expect(mockExitPIPFn).not.toHaveBeenCalledOnce();

            expect(mockSetPIPAttribute).toHaveBeenCalledTimes(2);
            expect(mockSetPIPAttribute).toHaveBeenCalledWith(
                "data-active",
                "true",
            );
            expect(mockSetPIPAttribute).toHaveBeenCalledWith(
                "aria-label",
                "Exit picture in picture mode.",
            );
        });
    });
});
