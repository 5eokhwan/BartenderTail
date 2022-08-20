import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        black: string;
        white: string;
        beige: string;
        deepBeige: string;
        teal: string;
        deepTeal: string;
        device: {
            mobile: string;
            tablet: string;
            laptop: string;
            portrait: string;
        };
    }
}