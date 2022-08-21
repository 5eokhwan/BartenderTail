import { darken } from "polished";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { IFilter } from "../../common/interface/data";
import { IRecipeItem } from "../../common/interface/recipe";
import garnish from "../../datas/garnish";
import glass from "../../datas/glass";
import ingredient from "../../datas/ingredient";
import technique from "../../datas/technique";
import FilterBox from "../FilterBox";
import SearchBar from "../SearchBar/SearchBar"; 

const ItemRow = styled.div`
    width: 100%;
    height: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
`;

const H = {
    Wrapper: styled.div<{isActive : boolean}>`
        display: flex;
        transition: transform 1s;
        transform: ${({ isActive }) =>  isActive ? `translate(calc(-${window.innerWidth / 3}px))` : `translate(0)` };
        
        @media ${({ theme }) => theme.device.portrait} {
            transform: ${({ isActive }) =>  isActive ? `translate(calc(-${window.innerWidth - 50}px))` : `translate(0)` };
        }
    `,
    ActiveBtn: styled.div<{isActive : boolean}>`
        position: relative;
        width: 50px;
        height: 50px;
        background: ${({ theme }) => theme.deepTeal};
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.2s;
        border-radius: 50% 0 0 50%;

        &::before {
            content: '';
            position: absolute;
            width: 15px;
            height: 2px;
            background: ${({ theme }) => theme.beige};
            transition: 0.2s;
            transform: translateY(-5px);
            box-shadow: 0 5px 0 ${({ theme }) => theme.beige};
        }

        &::after {
            content: '';
            position: absolute;
            width: 15px;
            height: 2px;
            background: ${({ theme }) => theme.beige};
            transition: 0.2s;
            transform: translateY(5px);
        }
        
        ${({isActive}) =>  isActive && `
            &::before {
                transform: translateY(0px) rotate(45deg);
                box-shadow: 0 0 0 #fff;
            }
            &::after {
                transform: translateY(0px) rotate(-45deg);
            }`
        };
    `,
    ColBar: styled.div`
        width: 30px;
        height: 2px;
        position: absolute;
        left: 7px;
        background: ${({ theme }) => theme.deepTeal};
        transform: rotate(90deg);
        z-index: 1;
    `,
    FilterContainer: styled.div`
        width: 100%;
        padding: 0 0 1em 0;
    `,
    ListWrapper: styled.div<{isActive: boolean}>`
        padding: 1em 7.5%;
        transition: 0.25s;
        height: 100vh;
        background: ${({ theme }) => theme.deepTeal};
        width: ${window.innerWidth / 3}px;
        overflow-y: scroll;

        @media ${({ theme }) => theme.device.portrait} {
            width: ${window.innerWidth - 50}px;
        }
    `,
    ItemContainer: styled.div`
        width: 100%;
        background: ${({ theme }) => theme.beige};
    `,
    ItemHead: styled(ItemRow)`
        background: transparent;
        font-family: SansMedium;
    `,
    ItemBox: styled(ItemRow)`
        background: ${({ theme }) => theme.white};
        margin: 0 0 0.25em 0;
        cursor: pointer;
        &:hover {
            background: ${({ theme }) => darken(0.1, theme.white)};
        }
    `,
    Name: styled.div`
        width: 70%;
        overflow: hidden;
    `,
    Checker: styled.div`
        height: 1.75em;
        width: 1.75em;
        box-sizing: content-box;
        border: 1px solid ${({ theme }) => theme.deepBeige};
        border-radius: 25%;  
    `,
    Check: styled.div`
        height: 1.25em;
        width: 1.25em;
        margin: 0.25em 0 0 0.25em;
        border-radius: 25%;
        background: ${({ theme }) => theme.deepBeige};
    `
}


interface IListTraveler {
    recipesList: IRecipeItem[];
    setRecipesList: React.Dispatch<React.SetStateAction<IRecipeItem[]>>;
    activeRecipeId: number;
    setActiveRecipeId: React.Dispatch<React.SetStateAction<number>>;
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

const ListTraveler : React.FC<IListTraveler> = ({activeRecipeId, setActiveRecipeId, recipesList, setRecipesList}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [filters, setFilters] = useState<IFilter[]>([]);

    const filteredList = useMemo(() => filterRecipes(recipesList, filters), [recipesList, filters]);

    const onToggleActive = () => {
        setIsActive(!isActive);
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

    const toggleShow = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
        e.stopPropagation();
        setRecipesList(recipesList.map((recipe, i) => 
            i === idx ? { ...recipe, show : !recipe.show } : recipe )
        );
    };

    const removeFilter = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
        setFilters(pre => {
            const newFilters = pre.slice();
            return newFilters.filter((v, i) => i !== idx);
        });
    }

    return (
        <H.Wrapper isActive={isActive}>
            <H.ActiveBtn onClick={onToggleActive} isActive={isActive}>
                {isActive || <H.ColBar />}
            </H.ActiveBtn>
            <H.ListWrapper isActive={isActive}>
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
                            <H.Checker onClick={(e) => toggleShowAll(e)}>
                                {filteredList.filter(v => v.show === true).length !== 0 && <H.Check />}
                            </H.Checker>
                        </H.ItemHead>) : 
                        (<H.ItemHead>
                            <H.Name>결과가 없습니다.</H.Name>
                        </H.ItemHead>)
                    }
                    {filteredList.map((v,i) => 
                        <H.ItemBox key={v.name + i} onClick={(e) => onClickItem(e, v)}>
                            <H.Name>{v.name}</H.Name>
                            <H.Checker onClick={(e) => toggleShow(e, i)}>
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