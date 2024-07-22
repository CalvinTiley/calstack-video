import { Player } from ".";
import { setupControls } from "@features/controls";
import { setupOverlay } from "@features/overlay";
import { setupSubtitles } from "@features/subtitles";

vi.mock("@features/controls", () => ({
    setupControls: vi.fn(),
}));

vi.mock("@features/overlay", () => ({
    setupOverlay: vi.fn(),
}));

vi.mock("@features/subtitles", () => ({
    setupSubtitles: vi.fn(),
}));

const mockedSetupControls = vi.mocked(setupControls);
const mockedSetupOverlay = vi.mocked(setupOverlay);
const mockedSetupSubtitles = vi.mocked(setupSubtitles);

describe("Player", () => {
    afterEach(() => {
        vi.resetAllMocks();
    });

    it("builds without controls if not passed in", () => {
        const player = new Player(document.createElement("div"), {
            controls: false,
            src: "test",
        });

        player.elements.video.dispatchEvent(new Event("loadedmetadata"));

        expect(mockedSetupControls).not.toHaveBeenCalled();
        expect(mockedSetupOverlay).toHaveBeenCalledOnce();
        expect(mockedSetupSubtitles).toHaveBeenCalledOnce();
    });

    it("builds with controls if passed in", () => {
        const player = new Player(document.createElement("div"), {
            controls: true,
            src: "test",
        });

        player.elements.video.dispatchEvent(new Event("loadedmetadata"));

        expect(mockedSetupControls).toHaveBeenCalledOnce();
        expect(mockedSetupOverlay).toHaveBeenCalledOnce();
        expect(mockedSetupSubtitles).toHaveBeenCalledOnce();
    });
});
