import { PlayerOptions } from "@typing/player";
import { TimeFormat } from "@typing/time";

export const isElement = (element: unknown): element is HTMLElement =>
    element instanceof HTMLElement;

export const padTime = (value: number) => `${value}`.padStart(2, "0");

export const getTimeUnits = (
    totalSeconds: number,
    maxTimeFormat: PlayerOptions["maxTimeFormat"],
) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(
        maxTimeFormat === TimeFormat.HOURS
            ? (totalSeconds % 3600) / 60
            : totalSeconds / 60,
    );
    const seconds = Math.floor(
        (totalSeconds % (maxTimeFormat === TimeFormat.HOURS ? 3600 : 60)) % 60,
    );

    return {
        hours,
        minutes,
        seconds,
    };
};

export const buildTime = (
    totalSeconds: number,
    maxTimeFormat: PlayerOptions["maxTimeFormat"],
) => {
    const { seconds, minutes, hours } = getTimeUnits(
        totalSeconds,
        maxTimeFormat,
    );

    let formattedTime = `${padTime(minutes)}:${padTime(seconds)}`;

    if (maxTimeFormat === TimeFormat.HOURS && hours > 0) {
        formattedTime = `${padTime(hours)}:${formattedTime}`;
    }

    return formattedTime;
};
