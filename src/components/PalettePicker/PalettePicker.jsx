import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useTheme } from '../../context/theme'

// const useUpdateTheme = ({ initialValue, colorProp }) => {     
//   const { theme, updateTheme, resetTheme } = useTheme();
//   const [color, setColor] = useColor('hex', initialValue);

//   const updateColor = color => {
//     setColor(color);
//     updateTheme({
//       colors: { [colorProp]: color.hex },
//     });
//   };

//   return updateColor;
// };

// const updatePColor = useUpdateTheme({
//   initialValue: theme.colors.primary,
//   colorProp: 'primary',
// });
// const updateSColor = useUpdateTheme({
//   initialValue: theme.colors.secondary,
//   colorProp: 'secondary',
// });


export const PalettePicker = () => {
    const { theme, updateTheme, resetTheme } = useTheme();
    const [primaryColor, setPrimaryColor] = useColor("hex", theme.colors.primary);
    const [secondaryColor, setSecondaryColor] = useColor('hex', theme.colors.secondary);

    const updatePrimaryColor = color => {
        // console.log(color.hex);
        setPrimaryColor(color);
        updateTheme({
            colors: { primary: color.hex },
        });
    };

    const updateSecondaryColor = color => {
        setSecondaryColor(color);
        updateTheme({
            colors: { secondary: color.hex },
        });
    };

    return (
        <>
            <button onClick={resetTheme}>Reset theme</button>

            <div style={{ display: 'flex', gap: 20 }}>
                <div>
                    <p>
                        Select <b>PRIMARY</b> color
                    </p>
                    <ColorPicker
                        width={300}
                        height={200}
                        color={primaryColor}
                        onChange={updatePrimaryColor}
                        hideHSV
                        dark
                    />
                </div>

                <div>
                    <p>
                        Select <b>SECONDARY</b> color
                    </p>
                    <ColorPicker
                        width={300}
                        height={200}
                        color={secondaryColor}
                        onChange={updateSecondaryColor}
                        hideHSV
                        dark
                    />
                </div>
            </div>
        </>
    );
}