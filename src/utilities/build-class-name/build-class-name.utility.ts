export const buildClassName = (defaultClass: string, className?: string) =>
    `${defaultClass} ${className ?? ""}`.trim();
