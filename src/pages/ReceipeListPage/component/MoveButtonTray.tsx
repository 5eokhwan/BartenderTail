import { ReactNode } from "react";
import styled from "styled-components"
import { IRecipeItem } from "../../../common/interface/recipe";

const M = {
    Wrapper: styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
    `,
    LeftButton: styled.button`
        position: absolute;
        z-index: 1;
        border: none;
        background: ${({ theme }) => theme.white};
        opacity: 30%;
        height: 100%;
        width: 7.5%;
        max-width: 50px;
    `,
    LArrow: styled.i`
        position: relative;
        &::before {
            content: '';
            position: absolute;
            width: 15px;
            height: 2px;
            transition: 0.2s;
            background: ${({ theme }) => theme.black};
            transform: translateY(-5px) rotateZ(-45deg);
        }
        &::after {
            content: '';
            position: absolute;
            width: 15px;
            height: 2px;
            transition: 0.2s;
            background: ${({ theme }) => theme.black};
            transform: translateY(5px) rotateZ(45deg);
        }
    `,
    RightButton: styled.button`
        position: absolute;
        z-index: 1;
        right: 0;
        border: none;
        background: ${({ theme }) => theme.white};
        opacity: 30%;
        height: 100%;
        width: 7.5%;
        max-width: 50px;
    `,
    RArrow: styled.i`
        position: relative;
        &::before {
            content: '';
            position: absolute;
         
            width: 15px;
            height: 2px;
            transition: 0.2s;
            background: ${({ theme }) => theme.black};
            transform: translateY(-5px) rotateZ(-135deg);
        }
        &::after {
            content: '';
            position: absolute;
         
            width: 15px;
            height: 2px;
            transition: 0.2s;
            background: ${({ theme }) => theme.black};
            transform: translateY(5px) rotateZ(135deg);
        }
    `,
}

interface IMoveButton {
    setActiveRecipeId : React.Dispatch<React.SetStateAction<number>>;
    displayedList: IRecipeItem[];
    activeRecipeId: number;
    children: ReactNode;
}

const MoveButtonTray : React.FC<IMoveButton> = 
  ({ children, setActiveRecipeId, displayedList, activeRecipeId }) => {

    const onMove = (move : number) : void => {
        const nextPos = displayedList.findIndex((v) => activeRecipeId === v.id) + move;
        if( nextPos < 0 || nextPos >= displayedList.length) {
            return;
        }
        setActiveRecipeId(displayedList.findIndex((v) => activeRecipeId === v.id) + move);
    }

    return (
        <M.Wrapper>
            <M.LeftButton onClick={() => onMove(-1)}>
                <M.LArrow />
            </M.LeftButton>
            <M.RightButton onClick={() => onMove(1)}>
                <M.RArrow />
            </M.RightButton>
            {children}
        </M.Wrapper>
    )
}

export default MoveButtonTray;