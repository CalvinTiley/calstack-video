import { HTMLAttributes } from "react";

export interface ICalstackVideoNextControl
    extends HTMLAttributes<HTMLButtonElement> {
    onNext?: () => void;
}
