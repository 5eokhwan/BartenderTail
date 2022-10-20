import styled from "styled-components";
import NavBar from "./NavBar";

const H = {
    Wrapper: styled.div`
        width: 100%;
        height: 100%
    };
    `
}

const Header : React.FC = () => {
    return (
        <H.Wrapper>
            <NavBar />
        </H.Wrapper>
    )
}

export default Header;