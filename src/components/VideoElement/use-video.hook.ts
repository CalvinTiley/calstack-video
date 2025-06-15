import { SyntheticEvent, useCallback } from "react";
import { useVideoContext } from "~contexts";
import { isVideoElement } from "~utilities/is-video-element";

export const useVideo = () => {
    const {
        setCurrentTime,
        setDuration,
        setIsMuted,
        setIsPlaying,
        setIsStalling,
        setVolume,
        videoRef,
    } = useVideoContext();

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsStalling(true);
    const onPlaying = () => setIsStalling(false);
    const onCanPlay = () => setIsStalling(false);
    const onStalled = () => setIsStalling(true);

    const onLoadedMetaData = useCallback(
        ({ target: video }: SyntheticEvent<HTMLVideoElement>) => {
            if (isVideoElement(video)) {
                setDuration(video.duration);
            }
        },
        [setDuration],
    );

    const onTimeUpdate = useCallback(
        ({ target: video }: SyntheticEvent<HTMLVideoElement>) => {
            if (isVideoElement(video)) {
                setCurrentTime(video.currentTime);
            }
        },
        [setCurrentTime],
    );

    const onVolumeChange = useCallback(
        ({ target: video }: SyntheticEvent<HTMLVideoElement>) => {
            if (isVideoElement(video)) {
                setIsMuted(video.muted);
                setVolume(video.volume);
            }
        },
        [setIsMuted, setVolume],
    );

    return {
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
    };
};
