import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { IRecipe } from "../../../common/interface/data";
import glass from "../../../datas/glass";
import technique from "../../../datas/technique";
import ingredient, { unit } from "../../../datas/ingredient";
import garnish from "../../../datas/garnish";

const R = {
    NameWrapper: styled.div`
        background: ${({ theme }) => darken(0.075, theme.beige)};
        padding: 1em;
        width: 100%;
        height: 3em;
    `,
    Name: styled.div`
        text-align: center;
        font-family: SansMedium;
    `,
    ContentWrapper: styled.div`
        width: 100%;
        padding: 0.75em 1em 1em 1em;
    `,
    Row: styled.div`
        display: flex;
        width: 100%;
        min-height: 2.5em;
        gap: 0.5em;
    `,
    Glass: styled.div`
        width: 50%;
        height: 100%;
    `,
    Technique: styled.div`
        width: 50%;
        height: 100%;
    `,
    Recipe: styled.div`
        min-height: 5em;
    `,
    Garnish: styled.div``,
    Title: styled.div`
        font-size: 1.5rem;
        text-align: center;
        padding: 0.25em 0;
        background: ${({ theme }) => darken(0.05, theme.beige)};
    `,
    Content: styled.div<{length: number}>`
        font-size: 1rem;
        margin-bottom: 0.5em;
        text-align: center;
        padding: 0.25em 0;
        min-height: ${({ length }) => length * 1 + 0.5}em;
        
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
    `,
}

interface IRecipeInfoFace {
    data: IRecipe;
}

const RecipeInfoFace : React.FC<IRecipeInfoFace> = ({ data }) => {
    return (
        <>
            <R.NameWrapper>
                <R.Name>{data.name}</R.Name>
            </R.NameWrapper>
            <R.ContentWrapper>
                <R.Row>
                    <R.Glass>
                        <R.Title>글라스</R.Title>
                        <R.Content length={1}>{glass[data.glass]}</R.Content>
                    </R.Glass>
                    <R.Technique>
                        <R.Title>기법</R.Title>
                        <R.Content length={data.technique.length}>
                            {data.technique.map((v, i) =>(<div key={i}>{technique[v]}</div>))}
                        </R.Content>
                    </R.Technique>
                </R.Row>
                <R.Recipe>
                    <R.Title>레시피</R.Title>
                    <R.Content length={data.ingredient.length}>
                        {data.ingredient.map((v, i) => 
                            (<div key={i}>{ingredient[v.type][v.name]}
                            {v.amount && <span> {v.amount}</span>}
                            <span> {unit[v.unit]}</span></div>))
                        }
                    </R.Content>
                </R.Recipe>
                {data.ganish.length ? <R.Garnish>
                    <R.Title>가니쉬</R.Title>
                    <R.Content length={data.ganish.length}>
                         {data.ganish.map((v,i) => (<div key={i}>{garnish[v]}</div>))}
                    </R.Content>
                </R.Garnish> : ''}
            </R.ContentWrapper>
        </>
    )
}

export default RecipeInfoFace;