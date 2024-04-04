import React from "react";
import { LabelColor, LabelKind } from "./LabelConstants";
import { VibeComponent, VibeComponentProps } from "../../types";
interface LabelProps extends VibeComponentProps {
    /**
     * @deprecated - use className instead
     */
    wrapperClassName?: string;
    /**
     * Class name for an inner text wrapper
     */
    labelClassName?: string;
    kind?: LabelKind;
    color?: LabelColor;
    text?: string;
    isAnimationDisabled?: boolean;
    isLegIncluded?: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
declare const _default: ((VibeComponent<LabelProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    colors: typeof LabelColor;
    kinds: typeof LabelKind;
}>) | (React.FC<LabelProps & React.RefAttributes<HTMLElement>> & Partial<{
    colors: typeof LabelColor;
    kinds: typeof LabelKind;
}>)) & {
    colors: typeof LabelColor;
    kinds: typeof LabelKind;
};
export default _default;
