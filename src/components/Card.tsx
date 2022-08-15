import { useState } from "react"
import styled from "styled-components"

const C = {
  Wrapper : styled.div`
    min-width: 420px;
    height: 100%;
    background: ${({ theme }) => theme.beige};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Name: styled.div`
  font-size: 2rem;
  `,
  Glass: styled.div``,
  Technique: styled.div``,
  Recipe: styled.div``,
  Garnish: styled.div``,
  Title: styled.div`
    font-size: 1.5rem;
  `,
  Content: styled.div<{length: number}>`
    font-size: 1rem;
    height: ${({ length }) => length * 1}em;
    overflow: hidden;
    transition: 0.5s;
  `,
}

function Card() {
  const [isFront, setIsFront] = useState(true);

  return (
    <C.Wrapper>
        <C.Name>Magarita</C.Name>
        <C.Glass>
            <C.Title>글라스</C.Title>
            <C.Content length={1}>Pilsner</C.Content>
        </C.Glass>
        <C.Technique>
            <C.Title>기법</C.Title>
            <C.Content length={1}>Float</C.Content>
        </C.Technique>
        <C.Recipe>
        <C.Title>레시피</C.Title>
            <C.Content length={1}>Float</C.Content>
        </C.Recipe>
        <C.Garnish>
        <C.Title>가니쉬</C.Title>
            <C.Content length={1}>Float</C.Content>
        </C.Garnish>
    </C.Wrapper>
  )
}

export default Card