import { ConditionalVisible, NextIcon, PauseIcon } from "~ui";

import { CalstackVideoControlBarControl } from "../Control";

import { ICalstackVideoNextControl } from "./NextControl.types";

export const CalstackVideoControlBarNextControl = ({
    onNext,
    ...props
}: ICalstackVideoNextControl) => {
    return (
        <CalstackVideoControlBarControl {...props} onClick={onNext}>
            <ConditionalVisible on={true} fallback={<PauseIcon />}>
                <NextIcon />
            </ConditionalVisible>
        </CalstackVideoControlBarControl>
    );
};
