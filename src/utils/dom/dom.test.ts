import { buildTime, getTimeUnits, isElement, padTime } from ".";
import { TimeFormat } from "@typing/time";

describe("dom utilities", () => {
    describe("isElement", () => {
        it.each([
            { expected: true, value: document.createElement("span") },
            { expected: true, value: document.createElement("div") },
            { expected: false, value: {} },
            { expected: false, value: [] },
            { expected: false, value: "string" },
            { expected: false, value: 123 },
            { expected: false, value: Symbol("symbol") },
            { expected: false, value: () => {} },
            { expected: false, value: new Map() },
            { expected: false, value: new Set() },
            { expected: false, value: document },
            { expected: false, value: null },
            { expected: false, value: undefined },
        ])("returns $expected for $value", ({ expected, value }) => {
            expect(isElement(value)).toBe(expected);
        });
    });

    describe("padTime", () => {
        it("should pad single digit numbers with a leading zero", () => {
            expect(padTime(0)).toBe("00");
            expect(padTime(1)).toBe("01");
            expect(padTime(9)).toBe("09");
        });

        it("should not pad double digit numbers", () => {
            expect(padTime(10)).toBe("10");
            expect(padTime(23)).toBe("23");
            expect(padTime(99)).toBe("99");
        });

        it("should handle edge cases", () => {
            expect(padTime(-1)).toBe("-1");
            expect(padTime(100)).toBe("100");
        });
    });

    describe("getTimeUnits", () => {
        it("should return correct time units when maxTimeFormat is HOURS", () => {
            expect(getTimeUnits(3661, TimeFormat.HOURS)).toEqual({
                hours: 1,
                minutes: 1,
                seconds: 1,
            });
            expect(getTimeUnits(3600, TimeFormat.HOURS)).toEqual({
                hours: 1,
                minutes: 0,
                seconds: 0,
            });
            expect(getTimeUnits(3599, TimeFormat.HOURS)).toEqual({
                hours: 0,
                minutes: 59,
                seconds: 59,
            });
        });

        it("should return correct time units when maxTimeFormat is not HOURS", () => {
            // Assuming that if maxTimeFormat is not HOURS, minutes and seconds are calculated differently
            expect(
                getTimeUnits(61, null as unknown as `${TimeFormat}`),
            ).toEqual({
                hours: 0,
                minutes: 1,
                seconds: 1,
            });
            expect(
                getTimeUnits(60, null as unknown as `${TimeFormat}`),
            ).toEqual({
                hours: 0,
                minutes: 1,
                seconds: 0,
            });
            expect(
                getTimeUnits(59, null as unknown as `${TimeFormat}`),
            ).toEqual({
                hours: 0,
                minutes: 0,
                seconds: 59,
            });
        });

        it("should handle edge cases", () => {
            expect(getTimeUnits(0, TimeFormat.HOURS)).toEqual({
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
            expect(getTimeUnits(0, null as unknown as `${TimeFormat}`)).toEqual(
                {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                },
            );
        });
    });

    describe("buildTime", () => {
        it("should return formatted time without hours if maxTimeFormat is not HOURS", () => {
            expect(buildTime(605, null as unknown as `${TimeFormat}`)).toBe(
                "10:05",
            );
        });

        it("should return formatted time with hours if maxTimeFormat is HOURS and hours are greater than 0", () => {
            expect(buildTime(3665, TimeFormat.HOURS)).toBe("01:01:05");
        });

        it("should handle edge cases", () => {
            expect(buildTime(0, null as unknown as `${TimeFormat}`)).toBe(
                "00:00",
            );
            expect(buildTime(0, TimeFormat.HOURS)).toBe("00:00");
        });
    });
});
