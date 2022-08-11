const pixelToRem = (size: number) => `${size / 16}rem`;

export const fontSizes = {
    title: pixelToRem(60),
    subtitle: pixelToRem(30),
    paragraph: pixelToRem(18),
};

const colors = {
    black: "#000",
    white: "#fff",
};

export const mode = {
    light: {
        black: colors.black,
        white: colors.white
    },
    dark: {
        black: colors.white,
        white: colors.black
    }
};