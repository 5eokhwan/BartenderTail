import { lighten } from 'polished';
import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { IRecipe } from '../../common/interface/data';
import Card from '../../components/Card/Card';
import RecipeInfoBackFace from '../../components/Card/Face/RecipeInfoBackFace';
import RecipeInfoFace from '../../components/Card/Face/RecipeInfoFace';
import recipes from '../../datas/recipe';
import CardCounter from './component/CardCounter';


const R = {
  Wrapper: styled.div`
    height: 100vh;
    width: 100vw;
  `,
  CounterWrapper: styled.div`
    height: 15%;
    padding: auto 0;
  `,
  ListDisplay : styled.div`
    height: 70%;
    min-height: 500px;
    width: 100vw;
    overflow: hidden;
    transition: 0.25s;
    ${({ theme }) => {
      const selected = theme.teal;
      return css`
          background: ${selected};
          &:hover {
            background: ${lighten(0.05, selected)};
          }
      `;
    }};
    `,
    CardContainer: styled.div<{scrollX: number}>`
    padding: 3.5em 0;
    height: 100%;
    display: flex;
    align-item: center;
    transform: translate(${({ scrollX }) => scrollX}px);
  `,
}
//window.innerWidth
const RecipeListPage: React.FC = () => {
  const [recipesList, setRecipesList] = useState<IRecipe[]>(recipes);
  const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(400);
  
  const scrollX = -(activeCardIdx * cardWidth) + (window.innerWidth / 2)
    - (cardWidth / 2);
  return (
    <R.Wrapper>
      <R.CounterWrapper>
        <CardCounter all={recipesList.length} cur={1}/>
      </R.CounterWrapper>
      <R.ListDisplay>
        <R.CardContainer scrollX={scrollX}>
          {recipesList.map(v => <Card
            frontFace={<RecipeInfoFace data={v}/>} 
            backFace={<RecipeInfoBackFace data={v}/>}
          />)}
        </R.CardContainer>
      </R.ListDisplay>
    </R.Wrapper>
  )
}

export default RecipeListPage;