export const buildClassName = (
    defaultClass: string,
    className?: string,
): string => `${defaultClass} ${className ?? ""}`.trim();
