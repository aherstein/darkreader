import './chrome';
import {DynamicThemeFix, FilterConfig as Theme} from '../definitions';
import ThemeEngines from '../generators/theme-engines';
import {createOrUpdateDynamicTheme, removeDynamicTheme} from '../inject/dynamic-theme';

const defaultTheme: Theme = {
    mode: 1,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    useFont: false,
    fontFamily: '',
    textStroke: 0,
    engine: ThemeEngines.dynamicTheme,
    stylesheet: '',
    solarized: false,
};

export function enable(themeOptions: Partial<Theme>, fixes: DynamicThemeFix = null, isIFrame = false) {
    const theme = {...defaultTheme, ...themeOptions};

    if (theme.engine !== ThemeEngines.dynamicTheme) {
        throw new Error('Theme engine is not supported');
    }

    createOrUpdateDynamicTheme(theme, fixes, isIFrame);
}

export function disable() {
    removeDynamicTheme();
}
