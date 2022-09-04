import { useMemo, useState } from "react";
import { IFilter } from "../../common/interface/data";
import { IRecipeItem } from "../../common/interface/recipe";
import garnish from "../../datas/garnish";
import glass from "../../datas/glass";
import ingredient from "../../datas/ingredient";
import technique from "../../datas/technique";
import FilterBox from "../FilterBox";
import SearchBar from "../SearchBar/SearchBar";
import { H } from "./ListTraveler.style";

interface IListTraveler {
    recipesList: IRecipeItem[];
    setRecipesList: React.Dispatch<React.SetStateAction<IRecipeItem[]>>;
    activeRecipeId: number;
    setActiveRecipeId: React.Dispatch<React.SetStateAction<number>>;
    mainTagWidth: number;
    setMainTagWidth: React.Dispatch<React.SetStateAction<number>>;
}

const filterRecipes = (recipes: IRecipeItem[], filters: IFilter[]) : IRecipeItem[] => {
    let filteredRecipes : IRecipeItem[] = recipes;
    for ( let i=0; i < filters.length; i++ ) {
        const regex = new RegExp(filters[i].value, 'i');
        if(filters[i].type === "name") {
            filteredRecipes = filteredRecipes.filter((recipe) => regex.test(recipe.name));
        } else if(filters[i].type === "ingredient") {
            filteredRecipes = filteredRecipes.filter((recipe) => {
                const ingredientsNames = recipe.ingredient.map(v => ingredient[v.type][v.name]);
                for (const ingredientName of ingredientsNames) {
                    if(regex.test(ingredientName)) {
                        return true;
                    }
                }
                return false;
            });
        } else if(filters[i].type === "glass") {
            filteredRecipes = filteredRecipes.filter((recipe) => 
                regex.test(glass[recipe.glass]));
        } else if(filters[i].type === "technique") {
            filteredRecipes = filteredRecipes.filter((recipe) => 
            {
                for(const tech of recipe.technique) {
                    if (regex.test(technique[tech])) {
                        return true;
                    }
                }
                return false;
            });
        } else if(filters[i].type === "ganish") {
            filteredRecipes = filteredRecipes.filter((recipe) => 
            {
                for(const tech of recipe.ganish) {
                    if (regex.test(garnish[tech])) {
                        return true;
                    }
                }
                return false;
            });
        }
    }
    return filteredRecipes;
}

const ListTraveler : React.FC<IListTraveler>
    = ({ setActiveRecipeId, recipesList, setRecipesList, mainTagWidth, setMainTagWidth}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [filters, setFilters] = useState<IFilter[]>([]);

    const filteredList = useMemo(() => filterRecipes(recipesList, filters), [recipesList, filters]);

    const onToggleActive = () => {
        setIsActive(!isActive);
        if(!isActive) {
            setMainTagWidth(window.innerWidth - (window.innerWidth / 3));
        } else {
            setMainTagWidth(window.innerWidth);
        }
    };

    const onClickItem = (e: React.MouseEvent<HTMLDivElement>, item: IRecipeItem) => {
        if(!item.show) {
            return;
        }
        setActiveRecipeId(item.id);
    }

    const toggleShowAll = (e: React.MouseEvent<HTMLDivElement>) => {
        if(filteredList.filter(v => v.show === true).length === 0) {
            setRecipesList(
                recipesList.map((recipe) => {
                    if (filteredList.findIndex(v => v.id === recipe.id) !== -1) {
                        return { ...recipe, show : true }
                    }
                    else {
                        return { ...recipe }
                    }
                })
            );
        }
        else {
            setRecipesList(recipesList.map((recipe) => {
                if (filteredList.findIndex(v => v.id === recipe.id) !== -1) {
                    return { ...recipe, show : false }
                }
                else {
                    return { ...recipe }
                }
             }));
        }

    };

    const toggleShow = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
        e.stopPropagation();
        setRecipesList(recipesList.map(recipe => recipe.id === id 
            ? { ...recipe, show: !recipe.show } : {...recipe}))
    };

    const removeFilter = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
        setFilters(pre => {
            const newFilters = pre.slice();
            return newFilters.filter((v, i) => i !== idx);
        });
    }

    return (
        <H.Wrapper isActive={isActive} mainTagWidth={mainTagWidth} >
            <H.ActiveBtn onClick={onToggleActive} isActive={isActive}>
                {isActive || <H.ColBar />}
            </H.ActiveBtn>
            <H.ListWrapper isActive={isActive} mainTagWidth={mainTagWidth}>
                <SearchBar setFilters={setFilters} />
                <H.FilterContainer>
                    {filters.map((filter, i) => (
                            <FilterBox key={i} type={filter.type} value={filter.value} 
                                onClick={(e: React.MouseEvent<HTMLDivElement>) => removeFilter(e, i)} />)
                    )}
                </H.FilterContainer>
                <H.ItemContainer>
                    {filteredList.length ? 
                        (<H.ItemHead>
                            <H.Name>목록</H.Name>
                            <H.Checker isHead onClick={(e) => toggleShowAll(e)}>
                                {filteredList.filter(v => v.show === true).length !== 0 && <H.Check isHead />}
                            </H.Checker>
                        </H.ItemHead>) : 
                        (<H.ItemHead>
                            <H.Name>결과가 없습니다.</H.Name>
                        </H.ItemHead>)
                    }
                    {filteredList.map((v,i) => 
                        <H.ItemBox key={v.name + i} onClick={(e) => onClickItem(e, v)}>
                            <H.Name>{v.name}</H.Name>
                            <H.Checker onClick={(e) => toggleShow(e, v.id)}>
                                {v.show && <H.Check />}
                            </H.Checker>
                        </H.ItemBox>
                    )}
                </H.ItemContainer>
            </H.ListWrapper>
        </H.Wrapper>
    )
}

export default ListTraveler;