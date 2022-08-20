import React, { useState, useRef, useEffect } from 'react';
import { IRecipeItem } from '../../common/interface/recipe';
import Card from '../../components/Card/Card';
import RecipeInfoBackFace from '../../components/Card/Face/RecipeInfoBackFace';
import RecipeInfoFace from '../../components/Card/Face/RecipeInfoFace';
import CardCounter from './component/CardCounter';
import { R }  from './ReceipeListPage.style';

interface IRecipeListPage {
  recipesList: IRecipeItem[];
  setRecipesList: React.Dispatch<React.SetStateAction<IRecipeItem[]>>;
  activeRecipe: number;
  setActiveRecipe: React.Dispatch<React.SetStateAction<number>>;
}

const RecipeListPage: React.FC<IRecipeListPage> = ({recipesList, setRecipesList, activeRecipe, setActiveRecipe}) => {
  const visibleRecipeCnt = recipesList.filter(v => v.show === true).length;

  
  const [cardWidth, setCardWidth] = useState<number>(400);
  const [cardMargin, setCardMargin] = useState<number>(5);
  
  const elementWidth = cardWidth + (cardMargin * 2);
  
  const $container = useRef<HTMLDivElement>(null);
  const originX = useRef<null | number>(null);
  
  const currentContainerX = -(activeRecipe * elementWidth) + (window.innerWidth / 2) - (elementWidth / 2);

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
        setActiveRecipe(getActiveCardIdx(currentContainerX + (e.clientX - originX.current)));
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
        <CardCounter all={visibleRecipeCnt} cur={activeRecipe + 1} />
      </R.CounterWrapper>
      <R.ListDisplay onMouseDown={ctrMouseDown}>
        <R.CardContainer ref={$container} activeCardIdx={activeRecipe} elementWidth={elementWidth}>
          {recipesList.map(v => v.show && <Card
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