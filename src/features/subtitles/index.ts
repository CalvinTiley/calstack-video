import { Player } from "@/Player";

export const setupSubtitles = (player: Player) => {
    player.options.subtitles?.forEach((sub) => {
        const trackElement = document.createElement("track");

        for (const property of Object.keys(sub)) {
            const value = sub[property as keyof HTMLTrackElement];

            if (property !== "default" || value) {
                trackElement.setAttribute(property, `${value}`);
            }
        }

        player.elements.video.appendChild(trackElement);
    });

    Array.from(player.elements.video.textTracks).forEach(
        (track) => (track.mode = "hidden"),
    );
};
