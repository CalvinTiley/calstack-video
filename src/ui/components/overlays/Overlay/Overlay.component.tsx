import { useMediaContext } from "~contexts";
import { PauseIcon, PlayIcon, Spinner } from "~ui";

import { ConditionalVisible } from "../../miscellaneous/ConditionalVisible";

import { useOverlay } from "./use-overlay";

import "./Overlay.styles.css";

export const Overlay = () => {
    const { isPlaying } = useMediaContext();
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
