import styled from "styled-components";
import { darken } from "polished";

const ItemRow = styled.div`
    width: 100%;
    height: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
`;

export const H = {
Wrapper: styled.div<{isActive : boolean, mainTagWidth: number}>`
    position: relative;    
    transition: transform 1s;
    transform: ${({ isActive }) =>  isActive ? `translate(calc(-${window.innerWidth / 3}px))` : `translate(0)` };
    @media ${({ theme }) => theme.device.tablet} {
        transform: ${({ isActive }) =>  isActive ? `translate(calc(-${window.innerWidth - 50}px))` : `translate(0)` };
    }
`,
ActiveBtn: styled.div<{isActive : boolean}>`
    position: absolute;
    left: -50px;
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.deepTeal};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s;
    border-radius: 50% 0 0 50%;

    &::before {
        content: '';
        position: absolute;
        width: 15px;
        height: 2px;
        background: ${({ theme }) => theme.beige};
        transition: 0.2s;
        transform: translateY(-5px);
        box-shadow: 0 5px 0 ${({ theme }) => theme.beige};
    }

    &::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 2px;
        background: ${({ theme }) => theme.beige};
        transition: 0.2s;
        transform: translateY(5px);
    }
    ${({isActive}) =>  isActive && `
        &::before {
            transform: translateY(0px) rotate(45deg);
            box-shadow: 0 0 0 #fff;
        }
        &::after {
            transform: translateY(0px) rotate(-45deg);
        }`
    };
`,
ColBar: styled.div`
    width: 30px;
    height: 2px;
    position: absolute;
    left: 7px;
    background: ${({ theme }) => theme.deepTeal};
    transform: rotate(90deg);
    z-index: 1;
`,
FilterContainer: styled.div`
    width: 100%;
    padding: 0 0 1em 0;
`,
ListWrapper: styled.div<{isActive: boolean, mainTagWidth: number}>`
    padding: 1em 7.5%;
    transition: 0.25s;
    height: 100vh;
    background: ${({ theme }) => theme.deepTeal};
    width: ${window.innerWidth / 3}px;
    overflow-y: scroll;
    
    @media ${({ theme }) => theme.device.tablet} {
        width: ${window.innerWidth - 50}px;
    }
`,
ItemContainer: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.beige};
`,
ItemHead: styled(ItemRow)`
    background: transparent;
    font-family: SansMedium;
`,
ItemBox: styled(ItemRow)`
    background: ${({ theme }) => theme.white};
    margin: 0 0 0.25em 0;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => darken(0.1, theme.white)};
    }
`,
Name: styled.div`
    width: 70%;
    overflow-y: visible;
`,
Checker: styled.div<{isHead?: boolean}>`
    height: 1.75em;
    width: 1.75em;
    box-sizing: content-box;
    border: 1px solid ${({ theme, isHead }) => isHead ? theme.deepTeal : theme.deepBeige };
    border-radius: 25%;
`,
Check: styled.div<{isHead?: boolean}>`
    height: 1.25em;
    width: 1.25em;
    margin: 0.25em 0 0 0.25em;
    border-radius: 25%;
    background: ${({ theme, isHead }) => isHead ? theme.deepTeal : theme.deepBeige};
`
}