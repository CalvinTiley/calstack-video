import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { useHLSContext } from "~contexts";

import { getQualityBitrate, getQualityLabel } from "./utilities";

type Position = { top: number; left: number; width: number };

export function useQualityMenu() {
    const { qualities, currentQuality, setQuality } = useHLSContext();

    const triggerRef = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState<Position>({ top: 0, left: 0, width: 0 });

    const updatePosition = () => {
        const t = triggerRef.current;
        if (!t) return;
        const r = t.getBoundingClientRect();
        setPos({
            top: r.bottom + 6 + window.scrollY,
            left: r.left + window.scrollX,
            width: r.width,
        });
    };

    useLayoutEffect(() => {
        if (open) updatePosition();
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onScrollOrResize = () => updatePosition();
        window.addEventListener("scroll", onScrollOrResize, true);
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            window.removeEventListener("scroll", onScrollOrResize, true);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onPointerDown = (e: PointerEvent) => {
            const t = triggerRef.current;
            const menu = document.getElementById(
                "calstack-video-quality-listbox",
            );
            if (
                t?.contains(e.target as Node) ||
                menu?.contains(e.target as Node)
            )
                return;
            setOpen(false);
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("pointerdown", onPointerDown, true);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown, true);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const handleSelect = (idx: number) => {
        setQuality(idx);
        setOpen(false);
    };

    const current = qualities.find((q) => q.index === currentQuality);
    const label = current
        ? `${getQualityLabel(current)} ${getQualityBitrate(current)}`
        : "Auto";

    // Always return a stable shape; caller decides to render or not
    return {
        open,
        setOpen,
        triggerRef,
        pos,
        handleSelect,
        label,
        qualities,
        currentQuality,
        hasQualities: qualities.length > 0,
    };
}
