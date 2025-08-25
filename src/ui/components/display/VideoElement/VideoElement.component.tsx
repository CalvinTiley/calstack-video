import { useVideoContext } from "~contexts";
import { buildClassName } from "~ui";

import type { IVideoElement } from "./VideoElement.types";
import { useVideoElement } from "./use-video-element.hook";

import "./VideoElement.styles.css";

export const VideoElement = ({ className, ...props }: IVideoElement) => {
    const { videoRef } = useVideoContext();

    const {
        onCanPlay,
        onLoadedMetaData,
        onPause,
        onPlay,
        onPlaying,
        onStalled,
        onTimeUpdate,
        onVolumeChange,
        onWaiting,
    } = useVideoElement();

    return (
        <video
            ref={videoRef}
            className={buildClassName("calstack-video-element", className)}
            {...props}
            onCanPlay={onCanPlay}
            onLoadedMetadata={onLoadedMetaData}
            onPause={onPause}
            onPlay={onPlay}
            onPlaying={onPlaying}
            onStalled={onStalled}
            onTimeUpdate={onTimeUpdate}
            onVolumeChange={onVolumeChange}
            onWaiting={onWaiting}
        />
    );
};
