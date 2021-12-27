import { createContext, useContext, useState, useCallback, useMemo } from 'react';   // createContext - создаёт объект Context
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import merge from 'lodash.merge';

const DEFAULT_THEME = Object.freeze({
    colors: {
        primary: '#1976d2',
        secondary: '#dc004e',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
        success: '#4caf50',
        common: {
            white: '#ffffff',
            black: '#000000',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
});

export const ThemeContext = createContext(undefined);  // Создали контекст.  undefined - т.к. Context обернут в Provider

export const useTheme = () => {                      // Создаем хук для исп-я контекста, чтобы в любои месте его вызвать и получить к нему доступ
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme was called outside ThemeContext.Provider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {        // И обязательно делаем Провайдер
    const [theme, setTheme] = useState(DEFAULT_THEME);

    // Когда сохранять на бекенде тему для каждого польз-ля. 
    // useEffect(() => {         
    //     //setTheme
    // }, [theme]);

    // Put in localstorage - можно и через localstorage тогда в useState(() => {возвращ.знач.из localstorage })

    const updateTheme = useCallback(changes => {    // хук useCallback - мемоизируется ф-я, делается новая копия тогда, когда меняется что-то из зависимостей 
        setTheme(currentTheme => merge({}, currentTheme, changes));  //_.merge(object, [sources])
    }, []);

    const resetTheme = useCallback(() => setTheme(DEFAULT_THEME), []);

    const contextValue = useMemo(() => ({          // мемоизируются значения 
        theme,
        updateTheme,
        resetTheme
    }),
        [resetTheme, theme, updateTheme],
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <EmotionProvider theme={theme}>{children}</EmotionProvider>
        </ThemeContext.Provider>
    );
};