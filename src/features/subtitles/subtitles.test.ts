import { setupSubtitles } from ".";
import { buildVideo } from "@features/video";
import { PlayerOptions } from "@typing/player";

import { Player } from "@/Player";

describe("setupSubtitles", () => {
    it("builds tracks", () => {
        const options = {
            subtitles: [
                {
                    default: true,
                    label: "English",
                    kind: "subtitles",
                    src: "./sandbox/subtitles/subtitles.vtt",
                    srclang: "en",
                },
                {
                    default: false,
                    label: "English",
                    kind: "subtitles",
                    src: "./sandbox/subtitles/subtitles.vtt",
                    srclang: "en",
                },
                {
                    label: "English",
                    kind: "subtitles",
                    src: "./sandbox/subtitles/subtitles.vtt",
                    srclang: "en",
                },
            ],
        } as PlayerOptions;

        const player = {
            elements: {
                video: buildVideo(options),
            },
            options,
        } as unknown as Player;

        setupSubtitles(player);

        expect(player.elements.video.children[0].getAttribute("default")).toBe(
            "true",
        );
        expect(player.elements.video.children[0].getAttribute("label")).toBe(
            "English",
        );
        expect(player.elements.video.children[0].getAttribute("kind")).toBe(
            "subtitles",
        );
        expect(player.elements.video.children[0].getAttribute("src")).toBe(
            "./sandbox/subtitles/subtitles.vtt",
        );
        expect(player.elements.video.children[0].getAttribute("srclang")).toBe(
            "en",
        );

        expect(
            player.elements.video.children[2].getAttribute("default"),
        ).toBeNull();
        expect(player.elements.video.children[2].getAttribute("label")).toBe(
            "English",
        );
        expect(player.elements.video.children[2].getAttribute("kind")).toBe(
            "subtitles",
        );
        expect(player.elements.video.children[2].getAttribute("src")).toBe(
            "./sandbox/subtitles/subtitles.vtt",
        );
        expect(player.elements.video.children[2].getAttribute("srclang")).toBe(
            "en",
        );
    });
});
