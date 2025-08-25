import { useState } from "react";

export const useMediaProvider = () => {
    // Time
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

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
        isMuted,
        isPlaying,
        isStalling,
        setCurrentTime,
        setDuration,
        setIsFullscreen,
        setIsMuted,
        setIsPlaying,
        setIsStalling,
        setVolume,
        setVolumeBeforeMute,
        volume,
        volumeBeforeMute,
    };
};
