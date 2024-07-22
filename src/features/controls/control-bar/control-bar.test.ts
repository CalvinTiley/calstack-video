import { setupControlBar } from ".";
import { TimeFormat } from "@typing/time";

import { Player } from "@/Player";

describe("setupControlBar", () => {
    it("builds all controls", () => {
        const player = {
            elements: {
                video: {
                    currentTime: 3600,
                    duration: 7200,
                },
            },
            options: {
                maxTimeFormat: TimeFormat.HOURS,
            },
        } as Player;

        const controlBar = setupControlBar(player);

        expect(controlBar.tagName.toLowerCase()).toBe("div");
        expect(
            controlBar.classList.contains("calstack-video-control-bar"),
        ).toBeTruthy();

        expect(
            controlBar.children[0].classList.contains(
                "calstack-video-control--play",
            ),
        );
        expect(
            controlBar.children[1].classList.contains("calstack-video-time"),
        );
        expect(
            controlBar.children[2].classList.contains("calstack-video-spacer"),
        );

        expect(
            controlBar.children[3].classList.contains(
                "calstack-video-control--captions",
            ),
        );

        expect(
            controlBar.children[4].classList.contains(
                "calstack-video-control--pip",
            ),
        );

        // For some reason there's a delay before fullscreen button is registered as a child of control bar
        setTimeout(() => {
            expect(
                controlBar.children[5].classList.contains(
                    "calstack-video-control--fullscreen",
                ),
            );
        }, 200);
    });

    describe("pip control", () => {
        it("is appended to control bar when PIP is supported", () => {
            const player = {
                elements: {
                    video: {
                        requestPictureInPicture: true,
                        currentTime: 3600,
                        duration: 7200,
                    },
                },
                options: {
                    maxTimeFormat: TimeFormat.HOURS,
                },
            } as unknown as Player;

            setupControlBar(player);

            expect(player.elements.pipButton).toBeDefined();
        });

        it("is not appended to control bar when PIP is not supported", () => {
            const player = {
                elements: {
                    video: {
                        currentTime: 3600,
                        duration: 7200,
                    },
                },
                options: {
                    maxTimeFormat: TimeFormat.HOURS,
                },
            } as unknown as Player;

            setupControlBar(player);

            expect(player.elements.pipButton).not.toBeDefined();
        });
    });
});
