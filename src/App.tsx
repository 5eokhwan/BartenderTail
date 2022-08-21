import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ListTraveler from './components/ListTraveler/ListTraveler';
import ModeToggle from './components/ModeToggle';
import RecipeListPage from './pages/ReceipeListPage/ReceipeListPage';
import GlobalStyle from './style/global';
import { deviceSizes, mode } from './style/theme';
import recipes from './datas/recipe';
import { IRecipeItem } from './common/interface/recipe';

const {light, dark} = mode;

const MainWrapper = styled.main`
`;

const ModeToggleWrapper = styled.div`
  position: fixed;
  padding: 5px 0 0 5px;
`;

const ListTravelerWrapper = styled.div`
  position: fixed;
  right: -${window.innerWidth / 3}px;
  z-index: 1;
  @media ${({ theme }) => theme.device.portrait} {
    right: ${-window.innerWidth + 50}px;
  }
`;

function App() {
  const [recipesList, setRecipesList] = useState<IRecipeItem[]>(recipes.map(v  => {
    const recipe = v as IRecipeItem;
    recipe.show = true;
    return recipe;
  }));

  const [activeRecipeId, setActiveRecipeId] = useState<number>(0);
  
  
  const [isLight, setIsLight] = useState(true);
  const toggleTheme = () => {setIsLight(!isLight)};


  return (
    <ThemeProvider theme={isLight ? light : dark}>
      <GlobalStyle />
        <div className="App">
          <ModeToggleWrapper>
            <ModeToggle isLight={isLight} height={35} onToggle={toggleTheme}/>
          </ModeToggleWrapper>
          <ListTravelerWrapper>
            <ListTraveler activeRecipeId={activeRecipeId} setActiveRecipeId={setActiveRecipeId} recipesList={recipesList} setRecipesList={setRecipesList}/>
          </ListTravelerWrapper>
          <MainWrapper>
            <RecipeListPage activeRecipeId={activeRecipeId} setActiveRecipeId={setActiveRecipeId} recipesList={recipesList} setRecipesList={setRecipesList}/>
          </MainWrapper>
        </div>
      </ThemeProvider>
  );
}

export default App;
