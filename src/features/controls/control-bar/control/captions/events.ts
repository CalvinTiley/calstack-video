import { Player } from "@/Player";

export const onClick =
    ({ elements: { video } }: Player) =>
    () => {
        Array.from(video.textTracks).forEach((track) => {
            if (track.mode === "hidden") {
                track.mode = "showing";
            } else {
                track.mode = "hidden";
            }
        });
    };
