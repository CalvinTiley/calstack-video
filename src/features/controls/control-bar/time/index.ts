import { PlayerOptions } from "@typing/player";
import { buildTime } from "@utils/dom";

import { Player } from "@/Player";

export const buildTimeElement = (
    totalSeconds: number,
    maxTimeFormat: PlayerOptions["maxTimeFormat"],
    type: "currentTime" | "duration",
) => {
    const timeUnitElement = document.createElement("span");
    timeUnitElement.classList.add("calstack-video-time-unit");
    timeUnitElement.setAttribute("data-time-unit", type);

    timeUnitElement.textContent = buildTime(totalSeconds, maxTimeFormat);

    return timeUnitElement;
};

export const buildTimeElements = (player: Player) => {
    const {
        elements: { video },
        options: { maxTimeFormat },
    } = player;

    const { currentTime, duration } = video;

    const currentTimeElement = buildTimeElement(
        currentTime,
        maxTimeFormat,
        "currentTime",
    );

    const timeElement = document.createElement("div");
    timeElement.classList.add("calstack-video-time");

    const timeDividerElement = document.createElement("span");
    timeDividerElement.classList.add("calstack-video-time-divider");
    timeDividerElement.textContent = "/";

    const durationElement = buildTimeElement(
        duration,
        maxTimeFormat,
        "duration",
    );

    player.elements.time = {
        current: currentTimeElement,
        divider: timeDividerElement,
        duration: durationElement,
    };

    timeElement.appendChild(currentTimeElement);
    timeElement.appendChild(timeDividerElement);
    timeElement.appendChild(durationElement);

    return timeElement;
};
