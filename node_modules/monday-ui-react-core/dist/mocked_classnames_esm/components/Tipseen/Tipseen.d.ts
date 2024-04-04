import { ReactElement } from "react";
import { AnimationType, DialogPosition, HideShowEvent, JustifyType } from "../../constants";
import { TipseenCloseButtonTheme } from "./TipseenConstants";
import { ElementContent, VibeComponent, VibeComponentProps } from "../../types";
import { MoveBy } from "../../types/MoveBy";
import { Modifier } from "react-popper";
interface TipseenProps extends VibeComponentProps {
    /**
     * Classname for overriding TipseenTitle styles
     */
    titleClassName?: string;
    position?: DialogPosition;
    animationType?: AnimationType;
    hideDelay?: number;
    showDelay?: number;
    title?: string;
    /**
     * @deprecated - use hideCloseButton instead
     */
    isCloseButtonHidden?: boolean;
    hideCloseButton?: boolean;
    children?: ReactElement;
    containerSelector?: string;
    hideTrigger?: HideShowEvent | Array<HideShowEvent>;
    showTrigger?: HideShowEvent | Array<HideShowEvent>;
    justify?: JustifyType;
    width?: number;
    moveBy?: MoveBy;
    hideWhenReferenceHidden?: boolean;
    /**
     * when false, the arrow of the tooltip is hidden
     */
    tip?: boolean;
    /** Class name for a tooltip's arrow */
    tooltipArrowClassName?: string;
    /**
     * PopperJS Modifiers type
     * https://popper.js.org/docs/v2/modifiers/
     */
    modifiers?: Array<Modifier<unknown>>;
    closeAriaLabel?: string;
    onClose?: () => void;
    content?: ElementContent;
    /**
     * Control the color of the Tipseen close button. Dark theme can be usfull while presenting bright images under the tipseen image
     */
    closeButtonTheme?: TipseenCloseButtonTheme;
    floating?: boolean;
}
declare const _default: ((VibeComponent<TipseenProps & import("react").RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    closeButtonThemes: typeof TipseenCloseButtonTheme;
    positions: typeof DialogPosition;
    animationTypes: typeof AnimationType;
    justifyTypes: typeof JustifyType;
    hideShowTriggers: typeof HideShowEvent;
}>) | (import("react").FC<TipseenProps & import("react").RefAttributes<HTMLElement>> & Partial<{
    closeButtonThemes: typeof TipseenCloseButtonTheme;
    positions: typeof DialogPosition;
    animationTypes: typeof AnimationType;
    justifyTypes: typeof JustifyType;
    hideShowTriggers: typeof HideShowEvent;
}>)) & {
    closeButtonThemes: typeof TipseenCloseButtonTheme;
    positions: typeof DialogPosition;
    animationTypes: typeof AnimationType;
    justifyTypes: typeof JustifyType;
    hideShowTriggers: typeof HideShowEvent;
};
export default _default;
