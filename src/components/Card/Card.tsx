import { ReactElement, useState } from "react"
import styled, { css } from "styled-components"
import { darken, lighten } from "polished";

const C = {
  Wrapper : styled.div<{isFront: boolean}>`
    min-width: 400px;
    height: 100%;
    background: ${({ theme }) => theme.beige};
    border-radius: 10px;
    transform: ${({ isFront }) => !isFront && 'rotateY(180deg)'};
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
  `,
  FrontFace: styled.div`
    font-size: 2rem;
    border-radius: 10px;
    overflow: hidden;
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
}


const Card : React.FC<ICard> = ({frontFace, backFace}) => {
  const [isFront, setIsFront] = useState(true);
  
  
  const onClick = () => {
    setIsFront(!isFront);
  }
 
  return (
    <C.Wrapper isFront={isFront} onClick={onClick}>
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