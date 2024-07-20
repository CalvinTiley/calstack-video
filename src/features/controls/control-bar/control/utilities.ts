import { ControlType } from "@typing/controls";

export const buildBaseControl = (type: ControlType) => {
    const control = document.createElement("button");

    control.classList.add(
        "calstack-video-control",
        `calstack-video-control--${type}`,
    );

    return control;
};
