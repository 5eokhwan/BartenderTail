import { lighten } from "polished";
import styled from "styled-components"

const N = {
    Wrapper: styled.div`
        height: 100%;
        width: 500px;
        max-width: 50%;
        margin: 0 auto;
        text-align: center;
    `,
    Menu: styled.a<{isActive?: boolean}>`
        display: inline-block;
        height: 100%;
        font-size: 1em;
        line-height: 2em;
        width: 50%;
        cursor: pointer;
        font-family: ${({ isActive }) => isActive ? 'SansMedium' : 'SansRegular' };
    `,
    UnderBar: styled.div`
        background: ${({ theme }) => lighten(0.1,theme.deepTeal)};
        width: 50%;
        height: 5px;
        position: relative;
        top: -5px;
    ` 
}

const NavBar : React.FC = () => {
    return (
        <N.Wrapper>
            <N.Menu>레시피</N.Menu>
            <N.Menu onClick={() => alert('준비중입니다.')}>테스트</N.Menu>
            <N.UnderBar />
        </N.Wrapper>
    )
}

export default NavBar;