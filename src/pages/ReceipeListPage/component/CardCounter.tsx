import styled from "styled-components";

const C = {
    Wrapper: styled.div`
        font-size: 3.5em;
        display: flex;
        justify-content: center;
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