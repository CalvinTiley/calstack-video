export enum TimeFormat {
    HOURS = "hours",
    MINUTES = "minutes",
}

export interface PlayerOptions {
    autoplay?: boolean;
    controls?: boolean;
    maxTimeFormat?: TimeFormat;
    src: string;
    subtitles?: Partial<HTMLTrackElement>[];
}
