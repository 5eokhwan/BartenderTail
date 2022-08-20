const pixelToRem = (size: number) => `${size / 16}rem`;

export const fontSizes = {
    title: pixelToRem(60),
    subtitle: pixelToRem(30),
    paragraph: pixelToRem(18),
};

const colors = {
    black: "#000",
    white: "#fff",
    beige: "#F7ECDE",
    deepBeige: "#E9DAC1",
    teal: "#9ED2C6",
    deepTeal: "#54BAB9"
};

export const deviceSizes = {
    mobile: "375px",
    tablet: "768px",
    laptop: "1024px",
  };

const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
    portrait : `screen and (orientation: portrait)`,
};

export const mode = {
    light: {
        black: colors.black,
        white: colors.white,
        beige: colors.beige,
        deepBeige: colors.deepBeige,
        teal: colors.teal,
        deepTeal: colors.deepTeal,
        device,
    },
    dark: {
        black: colors.white,
        white: colors.black,
        beige: "#4e0076",
        deepBeige: "#3F0071",
        teal: "#23086e",
        deepTeal: "#0f0138",
        device,
    }
};