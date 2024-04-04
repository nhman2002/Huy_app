import { RefObject } from "react";
import { GenericEventCallback } from "../../types/events";
export default function useClickOutside({ ref, callback, eventName }: {
    ref: RefObject<HTMLElement>;
    callback: GenericEventCallback;
    eventName?: keyof HTMLElementEventMap | string;
}): void;
