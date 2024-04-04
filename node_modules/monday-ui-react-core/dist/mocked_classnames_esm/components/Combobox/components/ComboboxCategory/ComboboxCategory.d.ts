import { FC } from "react";
import { IComboboxCategory } from "../ComboboxConstants";
interface ComboboxCategoryProps {
    category: IComboboxCategory;
    className: string;
}
declare const ComboboxCategory: FC<ComboboxCategoryProps>;
export default ComboboxCategory;
