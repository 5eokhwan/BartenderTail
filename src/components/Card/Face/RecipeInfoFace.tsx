import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { IRecipe } from "../../../common/interface/data";
import glass from "../../../datas/glass";
import technique from "../../../datas/technique";
import ingredient, { unit } from "../../../datas/ingredient";
import garnish from "../../../datas/garnish";

const R = {
    NameWrapper: styled.div`
        background: ${({ theme }) => darken(0.05, theme.beige)};
        padding: 1em;
        width: 100%;
    `,
    Name: styled.div`
        text-align: center;
        font-family: SansMedium;
    `,
    Glass: styled.div`
        margin-top: 0.5em;
    `,
    Technique: styled.div``,
    Recipe: styled.div``,
    Garnish: styled.div``,
    Title: styled.div`
        font-size: 1.5rem;
        margin-top: 0.5em;
        text-align: center;
        ${({ theme }) => {
        const selected = theme.beige;
        return css`
            background: ${darken(0.025, selected)};
        `;
        }};
    `,
    Content: styled.div<{length: number}>`
        font-size: 1rem;
        margin-bottom: 0.5em;
        text-align: center;
        height: ${({ length }) => length * 1}em;
        overflow: hidden;
        transition: 0.5s;
        margin-bottom: 0.5em;
        ${({ theme }) => {
            const selected = theme.beige;
            return css`
                background: ${lighten(0.025, selected)};
            `;
        }};
    `,
    RecipeType: styled.div`
        font-size: 1rem;
`}

interface IRecipeInfoFace {
    data: IRecipe;
}

const RecipeInfoFace : React.FC<IRecipeInfoFace> = ({ data }) => {
    return (
        <>
            <R.NameWrapper>
                <R.Name>{data.name}</R.Name>
            </R.NameWrapper>

            <R.Glass>
                <R.Title>글라스</R.Title>
                <R.Content length={1}>{glass[data.glass]}</R.Content>
            </R.Glass>
            <R.Technique>
                <R.Title>기법</R.Title>
                <R.Content length={data.technique.length}>
                    {data.technique.map(v =>(<div>{technique[v]}</div>))}
                </R.Content>
            </R.Technique>
            <R.Recipe>
                <R.Title>레시피</R.Title>
                <R.Content length={data.ingredient.length}>
                    {data.ingredient.map(v => 
                        (<div>{ingredient[v.type][v.name]}
                        {v.amount && <span>{v.amount}</span>}
                        <span>{unit[v.unit]}</span></div>))
                    }
                </R.Content>
            </R.Recipe>
            <R.Garnish>
                <R.Title>가니쉬</R.Title>
                <R.Content length={1}>
                    {data.ganish.map(v => (<div>{garnish[v]}</div>))}
                </R.Content>
            </R.Garnish>
        </>
    )
}

export default RecipeInfoFace;