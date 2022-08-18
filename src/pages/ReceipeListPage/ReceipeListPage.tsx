import React, { useState, useRef, useEffect } from 'react';
import { IRecipe } from '../../common/interface/data';
import Card from '../../components/Card/Card';
import RecipeInfoBackFace from '../../components/Card/Face/RecipeInfoBackFace';
import RecipeInfoFace from '../../components/Card/Face/RecipeInfoFace';
import recipes from '../../datas/recipe';
import CardCounter from './component/CardCounter';
import { R }  from './ReceipeListPage.style'; 

const RecipeListPage: React.FC = () => {
  const [recipesList, setRecipesList] = useState<IRecipe[]>(recipes);
  const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
  
  const [cardWidth, setCardWidth] = useState<number>(400);
  const [cardMargin, setCardMargin] = useState<number>(5);
  
  const elementWidth = cardWidth + (cardMargin * 2);
  
  const $container = useRef<HTMLDivElement>(null);
  const originX = useRef<null | number>(null);
  
  const currentContainerX = -(activeCardIdx * elementWidth) + (window.innerWidth / 2) - (elementWidth / 2);

  const getActiveCardIdx = (x : number) : number => {
    const whiteSpace = (window.innerWidth / 2) - (elementWidth / 2);
    return Math.abs(Math.round(( x - whiteSpace ) / elementWidth));
  }

  useEffect(() => {
    document.onmousemove = (e) => {
      if(originX.current && $container.current) {
        $container.current.style.transform = `translate(${currentContainerX + (e.clientX - originX.current)}px)`;
      }
    }
    document.onmouseup = (e) => {
      if(originX.current && $container.current) {
        $container.current.style.transform = "";
        $container.current.style.transition = "1s";
        console.log(getActiveCardIdx(currentContainerX + (e.clientX - originX.current)));
        setActiveCardIdx(getActiveCardIdx(currentContainerX + (e.clientX - originX.current)));
        originX.current = null;
      }
    }
    return () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }, [elementWidth, currentContainerX])

  const ctrMouseDown = (e: React.MouseEvent<HTMLDivElement>) : void => {
    if($container.current) {
      $container.current.style.transition = "";
      originX.current = e.clientX;
    }
  }

  return (
    <R.Wrapper>
      <R.CounterWrapper>
        <CardCounter all={recipesList.length} cur={activeCardIdx + 1}/>
      </R.CounterWrapper>
      <R.ListDisplay onMouseDown={ctrMouseDown}>
        <R.CardContainer ref={$container} activeCardIdx={activeCardIdx} elementWidth={elementWidth}>
          {recipesList.map(v => <Card
            key={v.name}
            frontFace={<RecipeInfoFace data={v}/>} 
            backFace={<RecipeInfoBackFace data={v}/>}
          />)}
        </R.CardContainer>
      </R.ListDisplay>
    </R.Wrapper>
  )
}

export default RecipeListPage;