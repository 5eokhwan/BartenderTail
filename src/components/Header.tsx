import styled from "styled-components";
import NavBar from "./NavBar";

const H = {
    Wrapper: styled.header<{ height: string }>`
        width: 100%;
        height: ${({ height }) => height};
        `,
    Row: styled.div`
        display: flex;
        width: 100%;
        height: 25%;
        background: ${({ theme }) => theme.white};
    `,
    UserBox: styled.div`
        width: 25px;
        height: 100%;
        border-radius: 50%;
        background: ${({ theme }) => theme.teal};
    `
}

const Header : React.FC<{ height: string }> = ({ height }) => {
    return (
        <H.Wrapper height={height}>
            <H.Row>
                <NavBar />
            </H.Row>
        </H.Wrapper>
    )
}

export default Header;