import { Player } from "@/Player";

export const buildCaptionEvents = (
    control: HTMLButtonElement,
    { elements: { video } }: Player,
) => {
    control.addEventListener("click", () => {
        Array.from(video.textTracks).forEach((track) => {
            if (track.mode === "hidden") {
                track.mode = "showing";
            } else {
                track.mode = "hidden";
            }
        });
    });
};
