import React from "react";
import { VibeComponent, VibeComponentProps } from "../../../types";
export interface ITableCellProps extends VibeComponentProps {
    children?: React.ReactNode;
}
declare const TableCell: VibeComponent<ITableCellProps, HTMLDivElement>;
export default TableCell;
