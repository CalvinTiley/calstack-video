import type { ReactNode } from "react";

interface IConditionalVisible {
    children: ReactNode;
    fallback?: ReactNode;
    on: unknown;
}

export const ConditionalVisible = ({
    children,
    fallback,
    on,
}: IConditionalVisible) => (on ? children : (fallback ?? null));
