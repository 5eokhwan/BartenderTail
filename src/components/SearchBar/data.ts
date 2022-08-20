import technique from "../../datas/technique";
import glass from "../../datas/glass";
import ganish from "../../datas/garnish";

export type searchType = "name" | "ingredient" | "technique" 
    | "glass" | "ganish";

type inputType = "text" | "select";
    
interface ISelectInfo {
    label: string;
    value: searchType;
    type: inputType;
    data?: any;
}

const selectInfo: ISelectInfo[] = [
    {
        label: "이름",
        value: "name",
        type: "text",
    },
    {
        label: "재료",
        value: "ingredient",
        type: "text",
    },
    {
        label: "기법",
        value: "technique",
        type: "select",
        data: technique,
    },
    {
        label: "글라스",
        value: "glass",
        type: "text",
        data: glass
    },
    {
        label: "가니쉬",
        value: "ganish",
        type: "text",
        data: ganish
    },
];


export default selectInfo;