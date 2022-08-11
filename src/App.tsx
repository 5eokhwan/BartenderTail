import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ModeToggle from './components/ModeToggle';
import RecipeListPage from './pages/ReceipeListPage/ReceipeListPage';
import GlobalStyle from './style/global';
import { mode } from './style/theme';

const {light, dark} = mode;

const ModeToggleWrapper = styled.div`
  position: fixed;
  padding: 5px 0 0 5px;
`;

function App() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {setIsLight(!isLight)};

  return (
    <ThemeProvider theme={isLight ? light : dark}>
      <GlobalStyle />
        <div className="App">
          <ModeToggleWrapper>
            <ModeToggle isLight={isLight} height={20} onToggle={toggleTheme}/>
          </ModeToggleWrapper>
          <RecipeListPage />
        </div>
      </ThemeProvider>
  );
}

export default App;
