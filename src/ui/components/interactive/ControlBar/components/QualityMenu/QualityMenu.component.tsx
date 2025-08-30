// QualityMenu.tsx (portal version)
import { createPortal } from "react-dom";

import { ConditionalVisible } from "~ui";

import { useQualityMenu } from "./use-quality-menu.hook";
import { getQualityBitrate, getQualityLabel } from "./utilities";

import "./QualityMenu.styles.css";

export const QualityMenu = () => {
    const {
        handleSelect,
        label,
        pos,
        triggerRef,
        setOpen,
        open,
        currentQuality,
        qualities,
        hasQualities,
    } = useQualityMenu();

    return (
        <ConditionalVisible on={hasQualities}>
            <button
                ref={triggerRef}
                type="button"
                className="calstack-video-quality-trigger"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls="calstack-video-quality-listbox"
                onClick={() => setOpen((o) => !o)}
            >
                {label}
                <span className="arrow" aria-hidden>
                    ▾
                </span>
            </button>

            {open &&
                createPortal(
                    <div
                        id="calstack-video-quality-listbox"
                        className="calstack-video-quality-list"
                        role="listbox"
                        style={{
                            position: "absolute",
                            top: pos.top,
                            left: pos.left,
                            minWidth: Math.max(180, pos.width),
                        }}
                    >
                        <div
                            id="quality--1"
                            role="option"
                            aria-selected={currentQuality === -1}
                            tabIndex={0}
                            className={`calstack-video-quality-item ${currentQuality === -1 ? "active" : ""}`}
                            onClick={() => handleSelect(-1)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && handleSelect(-1)
                            }
                        >
                            Auto
                        </div>

                        {qualities.map((q) => (
                            <div
                                key={q.index}
                                id={`calstack-video-quality-${q.index}`}
                                role="option"
                                aria-selected={currentQuality === q.index}
                                tabIndex={0}
                                className={`calstack-video-quality-item ${currentQuality === q.index ? "active" : ""}`}
                                onClick={() => handleSelect(q.index)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && handleSelect(q.index)
                                }
                            >
                                {getQualityLabel(q)} {getQualityBitrate(q)}
                            </div>
                        ))}
                    </div>,
                    document.body,
                )}
        </ConditionalVisible>
    );
};
