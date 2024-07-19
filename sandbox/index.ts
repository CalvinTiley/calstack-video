import { player } from "../src/main";

player("[data-selector='target']", {
    autoplay: true,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    subtitles: [
        {
            default: true,
            label: "English",
            kind: "subtitles",
            src: "./sandbox/subtitles/subtitles.vtt",
            srclang: "en",
        },
    ],
    maxTimeFormat: "hours",
});
