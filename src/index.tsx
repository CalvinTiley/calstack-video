import {
    ControlBar,
    Time,
    VideoElement,
    VolumeControl,
    Wrapper,
} from "~components";
import { VideoProvider } from "~contexts";
import { ICalstackVideo } from "~types/video.type";

export const CalstackVideo = (props: ICalstackVideo) => (
    <VideoProvider>
        <Wrapper {...props} />
    </VideoProvider>
);

CalstackVideo.ControlBar = ControlBar;
CalstackVideo.Provider = VideoProvider;
CalstackVideo.Time = Time;
CalstackVideo.VideoElement = VideoElement;
CalstackVideo.VolumeControl = VolumeControl;
CalstackVideo.Wrapper = Wrapper;
