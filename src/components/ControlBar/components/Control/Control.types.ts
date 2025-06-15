import { HTMLAttributes, ReactNode } from "react";

export interface IControl extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isActive?: boolean;
}
