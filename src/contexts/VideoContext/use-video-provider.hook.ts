import { useEffect, useRef, useState } from "react";

import { IVideoProvider } from "./VideoContext.types";

export const useVideoProvider = ({
    src: initialSrc,
}: Pick<IVideoProvider, "src">) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isHovering, setIsHovering] = useState(false);
    const [src, setSrc] = useState<string>(initialSrc);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = src;
        }
    }, [src, videoRef]);

    return {
        isHovering,
        setIsHovering,
        setSrc,
        src,
        videoRef,
        wrapperRef,
    };
};
