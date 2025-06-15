import { buildClassName } from "~utilities/build-class-name";
import { IVideoElement } from "../../types/video.type";

import { useVideo } from "./use-video.hook";

import "./VideoElement.styles.css";

export const VideoElement = ({ className, ...props }: IVideoElement) => {
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
        videoRef,
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
        />
    );
};
