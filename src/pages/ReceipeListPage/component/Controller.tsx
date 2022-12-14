import styled from "styled-components";
import { lighten } from 'polished';
import { IRecipeItem } from "../../../common/interface/recipe";

const C = {
    Wrapper: styled.div`
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2em;
    `,
    Button: styled.button`
        border: none;
        height: 1.5em;
        background: ${({ theme })=>theme.deepTeal };
        font-size: 2em;

        &:hover {
            background: ${({ theme })=>lighten(0.05, theme.deepTeal) };
        }
        &:active {
            background: ${({ theme })=>lighten(0.075, theme.deepTeal) };
        }
        
        @media ${({ theme }) => theme.device.tablet} {
            font-size: 1em;
            height: 2.5em;
        }
    `,
}

interface IController {
    displayedList: IRecipeItem[];
    setRecipesList: React.Dispatch<React.SetStateAction<IRecipeItem[]>>;
}

const Controller : React.FC<IController> = ({ displayedList, setRecipesList }) => {
    const onReverseFront = () => {
        const displayedListIds: number[] = displayedList.map(v => v.id);
        setRecipesList(pre => pre.map((v)=> {
            if(displayedListIds.includes(v.id)) {
                return {
                    ...v,
                    reverse: false,
                }
            }
            else {
                return v;
            }
        }))
    }
    
    const onReverseBack = () => {
        const displayedListIds: number[] = displayedList.map(v => v.id);
        setRecipesList(pre => pre.map((v)=> {
            if(displayedListIds.includes(v.id)) {
                return {
                    ...v,
                    reverse: true,
                }
            }
            else {
                return v;
            }
        }))
    }
    const onIntermingle = () => {
        setRecipesList(pre => {
            const newList = [...pre];
            return newList.sort(() => Math.random() - 0.5);
        });
    }
    return (
        <C.Wrapper>
            <C.Button onClick={onReverseFront}>?????? ??????</C.Button>
            <C.Button onClick={onReverseBack}>?????? ??????</C.Button>
            <C.Button onClick={onIntermingle}>?????? ??????</C.Button>
        </C.Wrapper>
    )
}

export default Controller;