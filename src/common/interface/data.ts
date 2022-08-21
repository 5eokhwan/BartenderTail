import { searchType } from "../../components/SearchBar/data";

type ingredientType = "base" | "liqueur" | "juice" | "beverage" | "wine" | "traditional" | "etc";

export interface IRecipe {
    recipeName?: string,
    id: number,
    name: string,
    glass: number,
    technique: number[],
    ingredient:{
        type: ingredientType,
        name: number,
        amount?: string,
        unit: number,
    }[],
    ganish: number[]
}

export interface IFilter {
    type: searchType,
    value: string,
}