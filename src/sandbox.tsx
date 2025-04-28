import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CalstackVideo } from ".";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CalstackVideo
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
        />
    </StrictMode>,
);
