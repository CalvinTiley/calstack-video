import { ConditionalVisible } from "../ConditionalVisible";
import { Control } from "../Control";
import { NextIcon, PauseIcon } from "../Icons";
import { useNextControl } from "./use-next-control";

export const NextControl = () => {
    const { onNext } = useNextControl();

    return (
        <Control onClick={onNext}>
            <ConditionalVisible on={true} fallback={<PauseIcon />}>
                <NextIcon />
            </ConditionalVisible>
        </Control>
    );
};
