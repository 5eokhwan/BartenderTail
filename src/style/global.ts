import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import font from './font';

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${font}
    
    body {
        font-family: SansRegular;
        background: ${({ theme }) => theme.teal};
        transition: 0.25s;
    }
    *, *::before, *::after {
        color: ${({ theme }) => theme.black};
        box-sizing: border-box;
    }
`;

export default GlobalStyle;