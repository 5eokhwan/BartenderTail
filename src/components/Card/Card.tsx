import { ReactElement } from "react"
import styled from "styled-components"

const C = {
  Wrapper : styled.div<{width: number, isFront: boolean}>`
    min-width: ${({ width }) => width}px;
    height: 100%;
    background: ${({ theme }) => theme.beige};
    border-radius: 10px;
    transform: ${({ isFront }) => !isFront && 'rotateY(180deg)'};
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
    margin: 5px;
    `,
  FrontFace: styled.div`
    font-size: 2rem;
    border-radius: 10px;
    overflow: auto;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  BackFace: styled.div`
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    transform: rotateY(180deg);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
}

interface ICard {
  frontFace: ReactElement;
  backFace: ReactElement;
  width: number;
  reverse: boolean;
  changeReverse: () => void;
}


const Card : React.FC<ICard> = ({ width, frontFace, backFace, reverse, changeReverse }) => {

  const onClick = () => {
    changeReverse();
  }
 
  return (
    <C.Wrapper width={width} isFront={!reverse} onClick={onClick}>
      <C.FrontFace>
        {frontFace}
      </C.FrontFace>
      <C.BackFace>
        {backFace}
      </C.BackFace>
    </C.Wrapper>
  )
}

export default Card