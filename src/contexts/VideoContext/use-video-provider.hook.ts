import { useRef, useState } from "react";

export const useVideoProvider = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Time
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // DOM
    const [isHovering, setIsHovering] = useState(false);

    // Fullscreen
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Playback
    const [isPlaying, setIsPlaying] = useState(false);
    const [isStalling, setIsStalling] = useState(false);

    // Volume
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [volumeBeforeMute, setVolumeBeforeMute] = useState(1);

    return {
        currentTime,
        duration,
        isFullscreen,
        isHovering,
        isMuted,
        isPlaying,
        isStalling,
        setCurrentTime,
        setDuration,
        setIsFullscreen,
        setIsHovering,
        setIsMuted,
        setIsPlaying,
        setIsStalling,
        setVolume,
        setVolumeBeforeMute,
        videoRef,
        volume,
        volumeBeforeMute,
        wrapperRef,
    };
};
