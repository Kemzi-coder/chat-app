import {alpha, getContrastRatio, darken} from "@mui/material";

const Colors = {
	CERULEAN_BlUE: "#1976d2",
	ROYAL_PURPLE: "#9c27b0",
	SCARLET_RED: "#d32f2f",
	TANGERINE_ORANGE: "#ed6c02",
	SKY_BLUE: "#0288d1",
	FOREST_GREEN: "#2e7d32"
};

const createColorObject = (color: string) => ({
	MAIN: color,
	LIGHT: alpha(color, 0.7),
	DARK: darken(color, 0.2),
	CONTRAST_TEXT: getContrastRatio(color, "#fff") > 4.5 ? "#fff" : "#111"
});

const Palette = {
	PRIMARY: createColorObject(Colors.CERULEAN_BlUE),
	SECONDARY: createColorObject(Colors.ROYAL_PURPLE),
	ERROR: createColorObject(Colors.SCARLET_RED),
	WARNING: createColorObject(Colors.TANGERINE_ORANGE),
	INFO: createColorObject(Colors.SKY_BLUE),
	SUCCESS: createColorObject(Colors.FOREST_GREEN)
};

export default Palette;
