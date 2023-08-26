import {createTheme} from "@mui/material";
import Palette from "./palette";

const theme = createTheme({
	palette: {
		primary: {
			main: Palette.PRIMARY.MAIN,
			light: Palette.PRIMARY.LIGHT,
			dark: Palette.PRIMARY.DARK,
			contrastText: Palette.PRIMARY.CONTRAST_TEXT
		},
		secondary: {
			main: Palette.SECONDARY.MAIN,
			light: Palette.SECONDARY.LIGHT,
			dark: Palette.SECONDARY.DARK,
			contrastText: Palette.SECONDARY.CONTRAST_TEXT
		},
		error: {
			main: Palette.ERROR.MAIN,
			light: Palette.ERROR.LIGHT,
			dark: Palette.ERROR.DARK,
			contrastText: Palette.ERROR.CONTRAST_TEXT
		},
		warning: {
			main: Palette.WARNING.MAIN,
			light: Palette.WARNING.LIGHT,
			dark: Palette.WARNING.DARK,
			contrastText: Palette.WARNING.CONTRAST_TEXT
		},
		info: {
			main: Palette.INFO.MAIN,
			light: Palette.INFO.LIGHT,
			dark: Palette.INFO.DARK,
			contrastText: Palette.INFO.CONTRAST_TEXT
		},
		success: {
			main: Palette.SUCCESS.MAIN,
			light: Palette.SUCCESS.LIGHT,
			dark: Palette.SUCCESS.DARK,
			contrastText: Palette.SUCCESS.CONTRAST_TEXT
		}
	}
});

export default theme;
