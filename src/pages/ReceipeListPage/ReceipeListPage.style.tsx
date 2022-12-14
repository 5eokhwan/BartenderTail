import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const R = {
    Wrapper: styled.div`
      height: 90%;
      width: 100%;
    `,
    CounterWrapper: styled.div`
      padding: 0 0 0.5em 0;
    `,
    CardsDisplay : styled.div`
      position: relative;
      user-select: none;
      cursor: grab;
      height: 80%;
      min-height: 500px;
      width: 100%;
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
      CardContainer: styled.div<{ posX: number }>`
        padding: 3.5em 0;
        height: 100%;
        display: flex;
        align-item: center;
        transform: translate(${({ posX }) => posX}px);
    `,
  }