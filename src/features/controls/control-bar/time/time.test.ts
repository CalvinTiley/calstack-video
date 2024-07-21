import { buildTimeElement, buildTimeElements } from ".";
import { TimeFormat } from "@typing/time";

import { Player } from "@/Player";

describe("time elements", () => {
    describe("buildTimeElement", () => {
        it("should create a span element with correct class and data attribute for currentTime", () => {
            const type = "currentTime";

            const element = buildTimeElement(390, TimeFormat.HOURS, type);

            expect(element.tagName.toLowerCase()).toBe("span");
            expect(
                element.classList.contains("calstack-video-time-unit"),
            ).toBeTruthy();
            expect(element.getAttribute("data-time-unit")).toBe(type);
        });

        it("should create a span element with correct class and data attribute for duration", () => {
            const type = "duration";

            const element = buildTimeElement(390, TimeFormat.HOURS, type);

            expect(element.tagName.toLowerCase()).toBe("span");
            expect(
                element.classList.contains("calstack-video-time-unit"),
            ).toBeTruthy();
            expect(element.getAttribute("data-time-unit")).toBe(type);
        });

        describe("time format - hours", () => {
            it("omits hours from text content when shorter than an hour", () => {
                const element = buildTimeElement(
                    390,
                    TimeFormat.HOURS,
                    "currentTime",
                );

                expect(element.textContent).toBe("06:30");
            });

            it("includes hours in text content when longer than an hour", () => {
                const element = buildTimeElement(
                    11190,
                    TimeFormat.HOURS,
                    "currentTime",
                );

                expect(element.textContent).toBe("03:06:30");
            });
        });

        describe("time format - minutes", () => {
            it("omits hours from text content when shorter than an hour", () => {
                const element = buildTimeElement(
                    390,
                    TimeFormat.MINUTES,
                    "currentTime",
                );

                expect(element.textContent).toBe("06:30");
            });

            it("omits hours from text content when longer than an hour", () => {
                const element = buildTimeElement(
                    11190,
                    TimeFormat.MINUTES,
                    "currentTime",
                );

                expect(element.textContent).toBe("186:30");
            });
        });
    });

    it("buildTimeElements builds correct structure", () => {
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

        const timeElement = buildTimeElements(player);

        expect(timeElement.tagName.toLowerCase()).toBe("div");
        expect(
            timeElement.classList.contains("calstack-video-time"),
        ).toBeTruthy();

        expect(timeElement.children[0].tagName.toLowerCase()).toBe("span");
        expect(timeElement.children[0].getAttribute("data-time-unit")).toBe(
            "currentTime",
        );
        expect(
            timeElement.children[0].classList.contains(
                "calstack-video-time-unit",
            ),
        ).toBeTruthy();
        expect(timeElement.children[0].textContent).toBe("01:00:00");

        expect(timeElement.children[1].tagName.toLowerCase()).toBe("span");
        expect(
            timeElement.children[1].classList.contains(
                "calstack-video-time-divider",
            ),
        ).toBeTruthy();
        expect(timeElement.children[1].textContent).toBe("/");

        expect(timeElement.children[2].tagName.toLowerCase()).toBe("span");
        expect(timeElement.children[2].getAttribute("data-time-unit")).toBe(
            "duration",
        );
        expect(
            timeElement.children[2].classList.contains(
                "calstack-video-time-unit",
            ),
        ).toBeTruthy();
        expect(timeElement.children[2].textContent).toBe("02:00:00");

        expect(player.elements.time?.current).toBe(timeElement.children[0]);
        expect(player.elements.time?.divider).toBe(timeElement.children[1]);
        expect(player.elements.time?.duration).toBe(timeElement.children[2]);
    });
});
