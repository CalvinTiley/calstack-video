import { ConditionalVisible } from "../../../ConditionalVisible";
import { ControlBarControl } from "../Control";
import { NextIcon, PauseIcon } from "../../../Icons";
import { useNextControl } from "./use-next-control.hook";

export const ControlBarNextControl = () => {
    const { onNext } = useNextControl();

    return (
        <ControlBarControl onClick={onNext}>
            <ConditionalVisible on={true} fallback={<PauseIcon />}>
                <NextIcon />
            </ConditionalVisible>
        </ControlBarControl>
    );
};
