import { ReactNode } from "react";

interface IConditionalVisible {
    children: ReactNode;
    fallback?: ReactNode;
    on: boolean;
}

export const ConditionalVisible = ({
    children,
    fallback,
    on,
}: IConditionalVisible) => (on ? children : (fallback ?? null));
