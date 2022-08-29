import styled from "styled-components";

const C = {
    Wrapper: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 2rem;
    `,
    PreviousBtn: styled.button`
        border: 2.5px solid ${({ theme })=>theme.white };
        background: ${({ theme })=>theme.deepTeal };
        font-size: 3rem;
    `,
    NextBtn: styled.button`
        border: 2.5px solid ${({ theme })=>theme.white };
        background: ${({ theme })=>theme.deepTeal };
        font-size: 3rem;
    `,
}

interface IController {
    setActiveRecipeId: React.Dispatch<React.SetStateAction<number>>;
    max: number;
}

const Controller : React.FC<IController> = ({ setActiveRecipeId, max }) => {
    const onPrevious = () => {
        setActiveRecipeId(pre => {
            if(0 >= pre - 1) {
                return 0;
            }
            return pre - 1;
        });
    };

    const onNext = () => {
        setActiveRecipeId(pre => {
            if(max <= pre + 1) {
                return pre;
            }
            return pre + 1;
        });
    };

    return (
        <C.Wrapper>
            <C.PreviousBtn onClick={onPrevious}>◀</C.PreviousBtn>
            <C.NextBtn onClick={onNext}>▶</C.NextBtn>
        </C.Wrapper>
    )
}

export default Controller;