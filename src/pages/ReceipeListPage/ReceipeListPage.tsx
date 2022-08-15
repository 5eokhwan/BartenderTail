import React from 'react'
import styled from 'styled-components';
import Card from '../../components/Card';


const R = {
  Wrapper: styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Display : styled.div`
    height: 70vh;
    min-height: 500px;
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    overflow: hidden;
  `,
  CardContainer: styled.div``,
}

const RecipeListPage: React.FC = () => {
  return (
    <R.Wrapper>
      <R.Display>
        <R.CardContainer>
          <Card />
        </R.CardContainer>
      </R.Display>
    </R.Wrapper>
  )
}

export default RecipeListPage;