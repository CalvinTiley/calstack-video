import { secondsToHMS } from "./utilities";

export const formatTime = (
    totalSeconds: number,
    maxUnit: "hours" | "minutes" = "hours",
) => {
    const { hours, minutes, seconds } = secondsToHMS(totalSeconds);

    if (maxUnit === "minutes") {
        // Convert hours to minutes for display
        const totalMinutes = hours * 60 + minutes;

        return [
            totalMinutes.toString().padStart(2, "0"),
            seconds.toString().padStart(2, "0"),
        ].join(":");
    }

    return [
        hours > 0 ? hours.toString().padStart(2, "0") : null,
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ]
        .filter(Boolean)
        .join(":");
};
