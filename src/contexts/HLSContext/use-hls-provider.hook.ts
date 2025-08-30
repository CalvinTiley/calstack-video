import type { Level, ManifestParsedData } from "hls.js";
import { useEffect, useMemo, useRef, useState } from "react";

import { useVideoContext } from "../VideoContext";

import type {
    HlsInstance,
    IHLSContext,
    IHLSProvider,
    IQualityLevel,
} from "./HLSContext.types";

const DEFAULT_LIVE_SYNC_DURATION = 5 as const;

export const useHLSProvider = ({ isLive }: Pick<IHLSProvider, "isLive">) => {
    const { videoRef, src } = useVideoContext();

    const hlsRef = useRef<HlsInstance | null>(null);
    const [qualities, setQualities] = useState<IQualityLevel[]>([]);
    const [currentQuality, setCurrentQuality] = useState<number>(-1);

    const isM3U8 = useMemo(() => !!src && /\.m3u8(?:$|\?)/i.test(src), [src]);

    // Engine effect lives INSIDE the provider
    useEffect(() => {
        const video = videoRef.current;

        // If not HLS or no video element, teardown + reset state
        if (!video || !isM3U8) {
            hlsRef.current?.destroy();
            hlsRef.current = null;
            setQualities([]);
            setCurrentQuality(-1);
            return;
        }

        let cancelled = false;

        (async () => {
            try {
                const mod = await import("hls.js");
                const Hls = mod.default;

                if (cancelled) return;

                const hls = new Hls({
                    liveSyncDuration: isLive
                        ? DEFAULT_LIVE_SYNC_DURATION
                        : undefined,
                    enableWorker: true,
                    capLevelToPlayerSize: true,
                    autoStartLoad: true,
                });

                hlsRef.current = hls;

                hls.attachMedia(video);
                hls.on(
                    Hls.Events.MEDIA_ATTACHED,
                    () => src && hls.loadSource(src),
                );

                hls.on(
                    Hls.Events.MANIFEST_PARSED,
                    (_evt: string, data: ManifestParsedData) => {
                        const lvls: IQualityLevel[] = data.levels.map(
                            (
                                { height, bitrate, name }: Level,
                                index: number,
                            ) => ({
                                index,
                                height,
                                bitrate,
                                name,
                            }),
                        );
                        setQualities(lvls);
                    },
                );

                // Payload is { level: number }
                hls.on(
                    Hls.Events.LEVEL_SWITCHED,
                    (_evt: string, data: { level: number }) => {
                        setCurrentQuality(data.level);
                    },
                );
            } catch {
                // hls.js not installed → native HLS (Safari/iOS) still works; just no engine state
                // eslint-disable-next-line no-console
                console.warn(
                    "[video] HLS not installed. Run `npm i hls.js` to enable streaming.",
                );
            }
        })();

        return () => {
            cancelled = true;
            hlsRef.current?.destroy();
            hlsRef.current = null;
        };
    }, [videoRef, src, isM3U8, isLive]);

    const setQuality = (index: number) => {
        setCurrentQuality(index);
        const hls = hlsRef.current;
        if (hls) hls.currentLevel = index; // -1 = auto
    };

    const value: IHLSContext = useMemo(
        () => ({
            hls: hlsRef.current,
            isHlsActive: isM3U8 && !!hlsRef.current,
            qualities,
            currentQuality,
            setQuality,
        }),
        [isM3U8, qualities, currentQuality],
    );

    return {
        value,
    };
};
