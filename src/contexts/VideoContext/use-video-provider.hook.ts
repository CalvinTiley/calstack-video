import { useRef, useState } from "react";

export const useVideoProvider = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isHovering, setIsHovering] = useState(false);

    return {
        isHovering,
        setIsHovering,
        videoRef,
        wrapperRef,
    };
};
