import { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
export interface StepsNumbersHeaderProps extends VibeComponentProps {
    activeStepIndex: number;
    stepsCount: number;
    isOnPrimary?: boolean;
}
export declare const StepsNumbersHeader: FC<StepsNumbersHeaderProps>;
