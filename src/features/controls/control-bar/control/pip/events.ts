import { Player } from "@/Player";

export const onClick =
    ({ elements: { video } }: Player) =>
    () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else {
            video.requestPictureInPicture();
        }
    };
