import { FC, ReactElement } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
export interface TabPanelProps extends VibeComponentProps {
    children?: ReactElement | ReactElement[];
    index?: number;
}
declare const TabPanel: FC<TabPanelProps>;
export default TabPanel;
