import { useState } from "react";
import styled from "styled-components";

const H = {
    Wrapper: styled.div``,
    ActiveBtn: styled.div<{isActive : boolean}>`
        position: relative;
        width: 50px;
        height: 50px;
        background: ${({ theme }) => theme.deepTeal};
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
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
    ListWrapper: styled.div`
    `
}


const HambergerMenu : React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const onToggle = () => {
        setIsActive(!isActive);
     };

    return (
        <H.Wrapper>
            <H.ActiveBtn onClick={onToggle} isActive={isActive}>
                {isActive || <H.ColBar />}
            </H.ActiveBtn>
            <H.ListWrapper>

            </H.ListWrapper>
        </H.Wrapper>
    )
}

export default HambergerMenu;