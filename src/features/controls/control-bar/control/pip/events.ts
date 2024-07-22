import { Player } from "@/Player";

export const onClick =
    ({ elements: { pipButton, video } }: Player) =>
    () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();

            pipButton?.setAttribute(
                "aria-label",
                "Enter picture in picture mode.",
            );
            pipButton?.setAttribute("data-active", "false");
        } else {
            video.requestPictureInPicture();

            pipButton?.setAttribute(
                "aria-label",
                "Exit picture in picture mode.",
            );
            pipButton?.setAttribute("data-active", "true");
        }
    };
