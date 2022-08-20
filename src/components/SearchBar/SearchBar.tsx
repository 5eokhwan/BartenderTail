import { IFilter } from "../../common/interface/data";
import useInputs from "../../hooks/useInputs";
import selectInfo from "./data";
import { S } from "./SearchBar.style";

interface ISearchBar {
    setFilters: React.Dispatch<React.SetStateAction<IFilter[]>>;
}

const SearchBar : React.FC<ISearchBar> = ({ setFilters }) => {
    const { form, onChange } = useInputs<IFilter>({
        type: 'name',
        value: '',
    });

    const addFilter = () => {
        if(form.value === '') {
            alert('값을 입력하세요.');
            return;
        }
        setFilters(pre => {
            const newFilters: IFilter[] = pre.slice();
            newFilters.push(form);
            return newFilters;
        })
    }
    
    return (
        <S.Wrapper>
            <S.Select name="type" onChange={onChange}>
                {selectInfo.map(v  => <S.Option key={v.label} value={v.value}>{v.label}</S.Option>)}
            </S.Select>
            <S.InputText name="value" onChange={onChange} />
            <S.Button onClick={addFilter}>검색</S.Button>
        </S.Wrapper>
        // <FilterBox type="타입" value="벨류" />
    )
}

export default SearchBar;