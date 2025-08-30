import { useVideoContext } from "~contexts";
import { buildClassName } from "~ui";

import type { ICalstackVideoVideo } from "./Video.types";
import { useVideo } from "./use-video.hook";

import "./Video.styles.css";

export const CalstackVideoVideo = ({
    className,
    playsInline = true,
    ...props
}: ICalstackVideoVideo) => {
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
    } = useVideo();

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
            playsInline
        />
    );
};
