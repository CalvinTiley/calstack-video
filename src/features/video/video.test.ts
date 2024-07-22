import { buildVideo, buildWrapper, setupVideo } from ".";
import { logError } from "@utils/logger";

import { onClick, onPause, onPlay, onTimeUpdate } from "./events";
import { Player } from "@/Player";

vi.mock("./events", () => ({
    onClick: vi.fn(),
    onPause: vi.fn(),
    onPlay: vi.fn(),
    onTimeUpdate: vi.fn(),
}));

const mockedOnClick = vi.mocked(onClick);
const mockedOnPause = vi.mocked(onPause);
const mockedOnPlay = vi.mocked(onPlay);
const mockedOnTimeUpdate = vi.mocked(onTimeUpdate);

vi.mock("@utils/logger", () => ({
    logError: vi.fn(),
}));

const mockedLogError = vi.mocked(logError);

describe("video", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    describe("buildWrapper", () => {
        it("builds wrapper if passed a valid element", () => {
            const div = document.createElement("div");
            div.setAttribute("data-test", "true");
            document.documentElement.appendChild(div);

            const wrapper = buildWrapper(div);

            expect(wrapper.getAttribute("data-test")).toBeTruthy();
        });

        it("builds wrapper if passed a selector", () => {
            const div = document.createElement("div");
            div.setAttribute("id", "test-div");
            document.documentElement.appendChild(div);

            const wrapper = buildWrapper("#test-div");

            expect(wrapper).toBeTruthy();
        });

        it("builds wrapper if passed a selector", () => {
            buildWrapper("#test-123");

            expect(mockedLogError).toHaveBeenCalledOnce();
        });
    });

    it("buildVideo", () => {
        const video = buildVideo({ src: "test123" });

        expect(video.getAttribute("src")).toBe("test123");
    });

    it("setupVideo", () => {
        setupVideo({
            elements: {
                video: buildVideo({ src: "test123" }),
            },
        } as Player);
        expect(mockedOnClick).toHaveBeenCalledOnce();
        expect(mockedOnPause).toHaveBeenCalledOnce();
        expect(mockedOnPlay).toHaveBeenCalledOnce();
        expect(mockedOnTimeUpdate).toHaveBeenCalledOnce();
    });
});
