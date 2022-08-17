import styled from "styled-components";
import { IRecipe } from "../../../common/interface/data";

const R = {
    Name: styled.div`
    text-align: center;
    font-family: SansMedium;
  `,
  RecipeType: styled.div`
    font-size: 1rem;
  `,
}

interface IRecipeInfoBackFace {
    data: IRecipe;
}

const RecipeInfoBackFace : React.FC<IRecipeInfoBackFace> = ({data}) => {
    return (
        <>
            <R.RecipeType>{data.recipeName || " "}</R.RecipeType>
            <R.Name>{data.name}</R.Name>
        </>
    )
}

export default RecipeInfoBackFace;