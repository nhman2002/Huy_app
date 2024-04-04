import { VibeComponentProps } from "../../../types";
import { FC } from "react";
interface MenuDividerProps extends VibeComponentProps {
    /**
     * @deprecated - use className instead
     */
    classname?: string;
}
declare const MenuDivider: FC<MenuDividerProps> & {
    isMenuChild?: boolean;
};
export default MenuDivider;
