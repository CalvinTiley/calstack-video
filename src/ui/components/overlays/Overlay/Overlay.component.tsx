import { useMediaContext } from "~contexts";
import { PauseIcon, PlayIcon, Spinner } from "~ui";

import { ConditionalVisible } from "../../miscellaneous/ConditionalVisible";

import { ICalstackVideoOverlay } from "./Overlay.types";
import { useCalstackVideoOverlay } from "./use-overlay";

import "./Overlay.styles.css";

export const CalstackVideoOverlay = ({ options }: ICalstackVideoOverlay) => {
    const { isPlaying } = useMediaContext();
    const { isFeedbackVisible, isStalling, onOverlayClick } =
        useCalstackVideoOverlay({ options });

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
