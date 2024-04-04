import { Theme } from "./ThemeProviderConstants";
export declare const shouldGenerateTheme: (theme: Theme) => boolean;
export declare const generateThemeCssOverride: (theme: Theme, themeClassSpecifier: string) => string;
export declare const generateRandomAlphaString: (length?: number) => string;
