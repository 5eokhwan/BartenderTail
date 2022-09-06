import { darken } from "polished";
import styled from "styled-components";
import { IFilter } from "../common/interface/data";

interface IFilterBox extends IFilter {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const F = {
    Wrapper: styled.span`
        height: 1.5em;
        border-radius: calc(1.5em / 2);
        background: ${({ theme }) => theme.white};
        padding: 0.2em 0.5em;
        cursor: pointer;
        white-space: nowrap;
        display: inline-block;
        margin: 0 0.25em 0.25em 0;

        &:hover {
            background: ${({ theme }) => darken(0.1,theme.white)};
        }
    `,
    Content: styled.span`
        display: inline-block;
        max-width: 15em;
        height: auto;
        padding-right: 0.5em;
    `,
    CloseBtn: styled.span`
        cursor: pointer;
        border: none;
        width: 0.75em;
        height: 1em;
        position: relative;
        display: inline-block;

        &::before {
            background: ${({ theme }) => theme.black};
            content: '';
            position: absolute;
            top: 0.5em;
            width: 100%;
            height: 0.1em;
            transform: rotate(-45deg);
        }

        &::after {
            background: ${({ theme }) => theme.black};
            content: '';
            position: absolute;
            top: 0.5em;
            width: 100%;
            height: 0.1em;
            transform: rotate(45deg);
        }
    `
}

const FilterBox : React.FC<IFilterBox> = ({ type, value, onClick }) => {
    return (
        <F.Wrapper onClick={onClick}>
            <F.Content>{type}: {value}</F.Content>
            <F.CloseBtn />
        </F.Wrapper>
    )
} 

export default FilterBox;