import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme"; // adjust the import path as necessary

const theme = createTheme(themeSettings);



declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }
    
    interface Palette {
        tertiary: PaletteColor;
    }
}

export default theme;