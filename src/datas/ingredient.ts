interface IIngredient {
    base: {
        [key: string]: string;
    };
    liqueur: {
        [key: string]: string;
    };
    juice: {
        [key: string]: string;
    };
    beverage: {
        [key: string]: string;
    };
    wine: {
        [key: string]: string;
    };
    traditional: {
        [key: string]: string;
    };
    etc: {
        [key: string]: string;
    };
}

const ingredient: IIngredient = {
    base: {
        1: "Bourbun Whisky",
        2: "Scotch Whisky",
        3: "Brandy",
        4: "Apple Brandy",
        5: "Vodka",
        6: "Light Rum",
        7: "White Rum",
        8: "Tequila",
        9: "Dry Gin"
    },
    liqueur: {
        1: "Melon Liqueur",
        2: "Banana Liqueur",
        3: "Coconut Flavored Rum",
        4: "Apricot Brandy",
        5: "Cherry Brandy",
        6: "Creme de Cassis",
        7: "Creme de Menthe (Green)",
        8: "Creme de Menthe (White)",
        9: "Creme de Cacao (White)",
        10: "Creme de Cacao (Brown)",
        11: "Triple Sec",  
        12: "Grand Marnier",
        13: "Kahlua",
        14: "Baileys Irish Cream",
        15: "Campari",
        16: "Drambuie",
        17: "Apple Punker",
        18: "Benedictine",
        19: "Sweet Vermouth",
        20: "Dry Vermouth",
        21: "Blue Curaso",
    },
    juice: {
        1: "Lime Juice",
        2: "Lemon Juice",
        3: "Cranberry Juice",
        4: "Grapefruit Juice",
        5: "Pineapple Juice",
        6: "Orange Juice",
        7: "White Grape Juice",
        8: "Squeezed Lemon"
    },
    beverage: {
        1: "Soda Water",
        2: "Ginger ale",
        3: "Cola",
        4: "Milk",
        5: "Sprite"
    },
    wine: {
        1: "White Wine"
    },
    traditional: {
        1: "감홍로",
        2: "진도 홍주",
        3: "안동 소주",
        4: "금산 인삼주",
        5: "선운산복분자주",
    },
    etc: {
        1: 'Suger',
        2: 'Grenadine Syrup',
        3: 'Raspberry Syrup',
        4: 'Sweet & Sour Mix',
        5: 'Pina Colada Mix',
        6: 'Angostura Bitters',
    }
};

interface IUnit {
    [key: string]: string;
}

export const unit : IUnit = {
    1: "oz",
    2: "tsp",
    3: "dash",
    4: "part",
    5: "ea",
    6: "fill",
    7: "on-top"
}

export default ingredient;