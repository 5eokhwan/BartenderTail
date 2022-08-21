import { searchType } from "../../components/SearchBar/data";

export interface IRecipe {
    recipeName?: string,
    id: number,
    name: string,
    glass: number,
    technique: number[],
    ingredient:{
        type: "base" | "liqueur" | "juice" | "beverage" | "wine" | "traditional" | "etc",
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