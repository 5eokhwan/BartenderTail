import styled from "styled-components"

const N = {
    Wrapper: styled.div`
        height: 2.5em;
        width: 500px;
        max-width: 50%;
        margin: 0 auto;
    `,
    Menu: styled.span`
        display: inline-block;
        height: 100%;
        width: 50%;
        background: ${({ theme }) => theme.deepTeal};
    `
}

const NavBar : React.FC = () => {
    return (
        <N.Wrapper>
            <N.Menu>레시피</N.Menu>
            <N.Menu>테스트</N.Menu>
        </N.Wrapper>
    )
}

export default NavBar;