import { css } from "styled-components";

export default css`
    @font-face {
        font-family: SansThin;
        src: url(${require('../fonts/NotoSansKR-Thin.otf')}) format('opentype');
    }
    @font-face {
        font-family: SansRegular;
        src: url(${require('../fonts/NotoSansKR-Regular.otf')}) format('opentype');
    }
    @font-face {
        font-family: SansMedium;
        src: url(${require('../fonts/NotoSansKR-Medium.otf')}) format('opentype');
    }
    @font-face {
        font-family: SansBold;
        src: url(${require('../fonts/NotoSansKR-Bold.otf')}) format('opentype');
    }
`;