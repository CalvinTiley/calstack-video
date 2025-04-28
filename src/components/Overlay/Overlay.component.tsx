import { useVideoContext } from "~contexts";
import { ConditionalVisible } from "../ConditionalVisible";
import { useOverlay } from "./use-overlay";
import { PauseIcon, PlayIcon, Spinner } from "../Icons";

import "./Overlay.styles.css";

export const Overlay = () => {
    const { isPlaying } = useVideoContext();
    const { isFeedbackVisible, isStalling, onOverlayClick } = useOverlay();

    return (
        <div className="calstack-video-overlay">
            <div
                className="calstack-video-overlay-spinner"
                data-visible={isStalling}
            >
                <Spinner />
            </div>

            <button
                className="calstack-video-overlay-clickable-area"
                onClick={onOverlayClick}
            >
                <div
                    className="calstack-video-overlay-visual-feedback"
                    data-visible={isFeedbackVisible}
                >
                    <ConditionalVisible on={isPlaying} fallback={<PauseIcon />}>
                        <PlayIcon />
                    </ConditionalVisible>
                </div>
            </button>
        </div>
    );
};
