import { ReactNode } from "react";
import styled from "styled-components"
import { IRecipeItem } from "../../../common/interface/recipe";
import { ReactComponent as Arrow } from "../../../svg/arrow.svg";

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
        height: 100%;
        width: 7.5%;
        max-width: 50px;
        background: transparent;
        &:hover {
            background: rgb(255 255 255 / 30%);
        }
        &:active {
            background: rgb(255 255 255 / 45%);
        }
    `,
    LArrow: styled.i`
        position: relative;
    `,
    RightButton: styled.button`
        position: absolute;
        z-index: 1;
        right: 0;
        border: none;
        height: 100%;
        width: 7.5%;
        max-width: 50px;
                background: transparent;
        &:hover {
            background: rgb(255 255 255 / 30%);
        }
        &:active {
            background: rgb(255 255 255 / 45%);
        }
    `,
    RArrow: styled.i`
        position: relative;
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
        setActiveRecipeId(displayedList[nextPos].id);
    }

    return (
        <M.Wrapper>
            <M.LeftButton onClick={() => onMove(-1)}>
                <Arrow style={{
                    transform: 'rotate(180deg)'
                }}/>
            </M.LeftButton>
            <M.RightButton onClick={() => onMove(1)}>
                <Arrow />
            </M.RightButton>
            {children}
        </M.Wrapper>
    )
}

export default MoveButtonTray;