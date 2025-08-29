import { CalstackVideoControlBarContainer } from "../Container";
import { CalstackVideoControlBarWrapper } from "../Wrapper";

import { ICalstackVideoControlBarShell } from "./Shell.types";

export const CalstackVideoControlBarShell = ({
    children,
    containerProps,
    ...props
}: ICalstackVideoControlBarShell) => {
    return (
        <CalstackVideoControlBarWrapper {...props}>
            <CalstackVideoControlBarContainer {...containerProps}>
                {children}
            </CalstackVideoControlBarContainer>
        </CalstackVideoControlBarWrapper>
    );
};
