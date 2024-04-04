import React, { FC } from "react";
import { StepsType } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ButtonProps } from "../Button/Button";
export interface StepsHeaderProps extends VibeComponentProps {
    type: StepsType;
    activeStepIndex: number;
    onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
    stepsCount: number;
    areNavigationButtonsHidden: boolean;
    backButtonProps: ButtonProps;
    nextButtonProps: ButtonProps;
    finishButtonProps: ButtonProps;
    areButtonsIconsHidden: boolean;
    isOnPrimary: boolean;
    onFinish?: (e: React.MouseEvent) => void;
}
export declare const StepsHeader: FC<StepsHeaderProps>;
