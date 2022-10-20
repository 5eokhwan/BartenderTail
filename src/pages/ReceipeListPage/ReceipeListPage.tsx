import React, { useState, useRef,useMemo, useEffect } from 'react';
import { IRecipeItem } from '../../common/interface/recipe';
import Card from '../../components/Card/Card';
import RecipeInfoBackFace from '../../components/Card/Face/RecipeInfoBackFace';
import RecipeInfoFace from '../../components/Card/Face/RecipeInfoFace';
import CardCounter from './component/CardCounter';
import Controller from './component/Controller';
import MoveButtonTray from './component/MoveButtonTray';
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

  const [cardWidth, setCardWidth] = useState<number>(mainTagWidth > window.innerHeight ? 400 : mainTagWidth * (80 / 100));
  const [cardMargin, setCardMargin] = useState<number>(5);
  
  const elementWidth = cardWidth + (cardMargin * 2);
  
  const displayedList : IRecipeItem[] = useMemo(() => recipesList.filter((v) => v.show === true), [recipesList]);

  const displayedActiveRecipeIdx = displayedList.findIndex((v) => v.id === activeRecipeId);
  
  const $container = useRef<HTMLDivElement>(null);
  const originX = useRef<null | number>(null);
  
  const currentContainerX = -(displayedActiveRecipeIdx * elementWidth) + (mainTagWidth / 2) - (elementWidth / 2);

  const getActiveCardIdx = (x : number) : number => {
    const firstOrLastwhiteSpace = (mainTagWidth / 2) - ( elementWidth / 2 );
    let result =  Math.abs(Math.round(( x - firstOrLastwhiteSpace ) / elementWidth ));
    if(result >= displayedList.length) {
      result = displayedList.length - 1;
    }
    return result;
  }
  useEffect(() => {
    if($container.current) {
      $container.current.style.transform = `translate(${currentContainerX}px)`;
    }
  }, [currentContainerX, mainTagWidth]);
  
  useEffect(() => {
    document.onmousemove = (e) : void => {
      if(originX.current && $container.current) {
        $container.current.style.transform = `translate(${currentContainerX + (e.clientX - originX.current)}px)`;
      }
    }
    document.onmouseup = (e) : void => {
      if(originX.current && $container.current) {
        $container.current.style.transform = "";
        $container.current.style.transition = "0.75s";
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
      <R.CardsDisplay onMouseDown={ctrMouseDown}>
        <CardCounter all={visibleRecipeCnt} cur={displayedActiveRecipeIdx + 1} />
        <MoveButtonTray setActiveRecipeId={setActiveRecipeId} displayedList={displayedList} activeRecipeId={activeRecipeId}>
          <R.CardContainer posX={currentContainerX} ref={$container}>
            {recipesList.map(v => v.show && <Card
              key={v.name}
              width={cardWidth}
              frontFace={<RecipeInfoFace data={v}/>}
              backFace={<RecipeInfoBackFace data={v}/>}
              reverse={v.reverse}
              changeReverse={() => {
                setRecipesList(recipesList.map(recipe => 
                  v.id === recipe.id ? {...recipe, reverse: !recipe.reverse } : recipe ));
              }}
            />)}
          </R.CardContainer>
        </MoveButtonTray>
      </R.CardsDisplay>
      <Controller setRecipesList={setRecipesList} displayedList={displayedList} />
    </R.Wrapper>
  )
}

export default RecipeListPage;