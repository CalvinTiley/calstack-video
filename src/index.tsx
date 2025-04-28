import { Wrapper } from "~components";
import { VideoProvider } from "~contexts";
import { ICalstackVideo } from "~types/video.type";

export const CalstackVideo = (props: ICalstackVideo) => (
    <VideoProvider>
        <Wrapper {...props} />
    </VideoProvider>
);
