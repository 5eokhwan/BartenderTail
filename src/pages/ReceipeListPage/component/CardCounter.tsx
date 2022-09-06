import styled from "styled-components";

const C = {
    Wrapper: styled.div`
        position: absolute;
        width: 100%;
        font-size: 3em;
        font-family: SansBold;
        display: flex;
        justify-content: center;
        color: ${({ theme }) => theme.white};
    `,

}

interface ICardCounter {
    all: number;
    cur: number;
}

const CardCounter : React.FC<ICardCounter> = ({all, cur}) => {
    return (
        <C.Wrapper>
            {cur}/{all}
        </C.Wrapper>
    )
}

export default CardCounter;