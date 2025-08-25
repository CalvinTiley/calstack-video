export const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="var(--calstack-video-color-accent)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="90, 150"
                strokeDashoffset="0"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;1"
                    values="0 25 25;360 25 25"
                />
            </circle>
        </svg>
    );
};
