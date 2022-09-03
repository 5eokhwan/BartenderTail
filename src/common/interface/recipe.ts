import { IRecipe } from "./data";

export interface IRecipeItem extends IRecipe {
    show: boolean;
    reverse: boolean;
}