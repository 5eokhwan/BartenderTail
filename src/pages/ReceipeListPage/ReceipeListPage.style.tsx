import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const R = {
    Wrapper: styled.div`
      height: 100vh;
      width: 100vw;
    `,
    CounterWrapper: styled.div`
      height: 15%;
      padding: auto 0;
    `,
    ListDisplay : styled.div`
      cursor: grab;
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
            &:active {
              background: ${lighten(0.075, selected)};
            }
        `;
      }};
      `,
      CardContainer: styled.div<{activeCardIdx: number, elementWidth: number}>`
      padding: 3.5em 0;
      height: 100%;
      display: flex;
      align-item: center;
      transform: translate(${({ activeCardIdx, elementWidth }) => 
        -(activeCardIdx * elementWidth) + (window.innerWidth / 2) - (elementWidth / 2)}px);
    `,
  }