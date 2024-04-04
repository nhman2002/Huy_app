import React, { ReactElement } from "react";
import { SystemTheme, Theme, ThemeColor } from "./ThemeProviderConstants";
export interface ThemeProviderProps {
    /**
     * The theme to apply, consists of name - name of css class that will be added to the children, which should be unique - and the object of colors overrides for each system theme.
     */
    theme?: Theme;
    /**
     * The children to render with the theme
     */
    children: ReactElement;
    /**
     * String which adds up to theme name selector to make it more specific (in case if theme.name is colliding with some other class name)
     */
    themeClassSpecifier?: string;
}
declare const _default: ((import("../../types/VibeComponent").default<ThemeProviderProps, unknown> & Partial<{
    systemThemes: typeof SystemTheme;
    colors: typeof ThemeColor;
}>) | (React.FC<ThemeProviderProps> & Partial<{
    systemThemes: typeof SystemTheme;
    colors: typeof ThemeColor;
}>)) & {
    systemThemes: typeof SystemTheme;
    colors: typeof ThemeColor;
};
export default _default;
