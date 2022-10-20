import { lighten } from "polished";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const N = {
    Wrapper: styled.div`
        height: 100%;
        width: 20em;
        max-width: 50%;
        margin: 0 auto;
        text-align: center;
        position: relative;
    `,
    Menu: styled.a<{isActive?: boolean}>`
        display: inline-block;
        height: 100%;
        font-size: 1em;
        width: 10em;
        line-height: 3em;
        cursor: pointer;
        
        font-family: ${({ isActive }) => isActive ? 'SansMedium' : 'SansRegular' };
        &: hover {
            background: ${({ theme }) => lighten(0.1,theme.teal)};
        }
    `,
    UnderBar: styled.div<{idx: number}>`
        background: ${({ theme }) => lighten(0.1, theme.deepTeal)};
        transform: translateX(calc(10em * ${({ idx }) => idx }));
        transition: 0.25s;
        width: 10em;
        height: 0.25em;
        position: absolute;
        bottom: 0;
    ` 
}

const menuUrls = ["/", "/test"]; 

const NavBar : React.FC = () => {
    let location = useLocation();
    return (
        <N.Wrapper>
                <Link to="/"><N.Menu isActive={"/" === location.pathname}>레시피</N.Menu></Link>
                <Link to="/test"><N.Menu isActive={"/test" === location.pathname}>테스트</N.Menu></Link>
            <N.UnderBar idx={menuUrls.findIndex((v) => v  === location.pathname)}/>
        </N.Wrapper>
    )
}

export default NavBar;