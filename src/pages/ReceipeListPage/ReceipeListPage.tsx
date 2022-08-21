import React, { useState, useRef,useMemo, useEffect } from 'react';
import { IRecipeItem } from '../../common/interface/recipe';
import Card from '../../components/Card/Card';
import RecipeInfoBackFace from '../../components/Card/Face/RecipeInfoBackFace';
import RecipeInfoFace from '../../components/Card/Face/RecipeInfoFace';
import CardCounter from './component/CardCounter';
import { R }  from './ReceipeListPage.style';

interface IRecipeListPage {
  recipesList: IRecipeItem[];
  setRecipesList: React.Dispatch<React.SetStateAction<IRecipeItem[]>>;
  activeRecipeId: number;
  setActiveRecipeId: React.Dispatch<React.SetStateAction<number>>;
  mainTagWidth: number;
}

const RecipeListPage: React.FC<IRecipeListPage> 
    = ({recipesList, setRecipesList, activeRecipeId, setActiveRecipeId, mainTagWidth}) => {
  const visibleRecipeCnt = recipesList.filter(v => v.show === true).length;

  const [cardWidth, setCardWidth] = useState<number>(400);
  const [cardMargin, setCardMargin] = useState<number>(5);
  
  const elementWidth = cardWidth + (cardMargin * 2);
  
  const displayedList = useMemo(() => recipesList.filter((v) => v.show === true), [recipesList]);

  const displayedActiveRecipeIdx = displayedList.findIndex((v) => v.id === activeRecipeId);
  
  const $container = useRef<HTMLDivElement>(null);
  const originX = useRef<null | number>(null);
  
  const currentContainerX = -(displayedActiveRecipeIdx * elementWidth) + (mainTagWidth / 2) - (elementWidth / 2);

  const getActiveCardIdx = (x : number) : number => {
    const whiteSpace = (mainTagWidth / 2) - (elementWidth / 2);
    let result =  Math.abs(Math.round(( x - whiteSpace ) / elementWidth));
    if(result >= displayedList.length) {
      result = displayedList.length - 1;
    }
    return result;
  }
  useEffect(() => {
    if($container.current) {
      console.log("useEffect");
      $container.current.style.transform = `translate(${currentContainerX}px)`;
    }
  }, [currentContainerX, mainTagWidth]);
  
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
        setActiveRecipeId(displayedList[getActiveCardIdx(currentContainerX + (e.clientX - originX.current))].id);
        originX.current = null;
      }
    }
    return () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }, [elementWidth, currentContainerX, displayedList])

  const ctrMouseDown = (e: React.MouseEvent<HTMLDivElement>) : void => {
    if($container.current) {
      $container.current.style.transition = "";
      originX.current = e.clientX;
    }
  }

  return (
    <R.Wrapper>
      <R.CounterWrapper>
        <CardCounter all={visibleRecipeCnt} cur={displayedActiveRecipeIdx + 1} />
      </R.CounterWrapper>
      <R.ListDisplay onMouseDown={ctrMouseDown}>
        <R.CardContainer ref={$container} activeCardIdx={displayedActiveRecipeIdx} elementWidth={elementWidth}>
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