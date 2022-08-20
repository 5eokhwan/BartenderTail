import { IRecipe } from "../common/interface/data";

const recipes: IRecipe[] = [
    {
        name: "Manhattan",
        glass: 1,
        technique: [2],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: 1 + 1/2,
                unit: 1
            },
            {
                type: "liqueur",
                name: 19,
                amount: 3/4,
                unit: 1
            },
            {
                type: "etc",
                name: 6,
                amount: 1,
                unit: 3
            }
        ],
        ganish: [1],
    },
    {
        name: "Old Fashioned",
        glass: 2,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: 1,
                unit: 2,
            },
            {
                type: "etc",
                name: 6,
                amount: 1,
                unit: 3,
            },
            {
                type: "etc",
                name: 6,
                amount: 1,
                unit: 3,
            },
            {
                type: "beverage",
                name: 1,
                amount: 1/2,
                unit: 1
            }
        ],
        ganish: [1,2]
    },
    {
        name: "New York",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: 1,
                unit: 2,
            },
            {
                type: "etc",
                name: 2,
                amount: 1/2,
                unit: 2,
            },
            {
                type: "beverage",
                name: 1,
                amount: 1/2,
                unit: 1
            }
        ],
        ganish: [3]
    },
    {
        name: "Whiskey Sour",
        glass: 1,
        technique: [3, 1],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: 1,
                unit: 2,
            },
            {
                type: "beverage",
                name: 1,
                amount: 1,
                unit: 1,
            },
        ],
        ganish: [4, 1]
    },
    {
        name: "Rusty Nail",
        glass: 1,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 2,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 16,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Side car",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 3,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: 1/4,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Brandy Alexander",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 3,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 10,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "beverage",
                name: 4,
                amount: 3/4,
                unit: 1,
            },
        ],
        ganish: [5]
    },
    {
        name: "Honeymoon",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 4,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 18,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 1/4,
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Black Russian",
        glass: 2,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 13,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Moscow Mule",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "beverage",
                name: 2,
                unit: 6,
            },
        ],
        ganish: [3]
    },
    {
        name: "Seabreeze",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 3,
                amount: 3,
                unit: 1,
            },
            {
                type: "juice",
                name: 1/2,
                unit: 1,
            },
        ],
        ganish: [3]
    },
    {
        name: "Cosmopolitan",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 3,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        name: "Apple Martini",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 17,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: [7]
    },
    {
        name: "Pina Colada",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: 1 + 1/4,
                unit: 1,
            },
            {
                type: "etc",
                name: 5,
                amount: 2,
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: 2,
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
    {
        name: "Blue Hawaiian",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 21,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 3,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: 2 + 1/2,
                unit: 1,
            }
        ],
        ganish: [1, 8]
    },
    {
        name: "Mai-Tai",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: 1 + 1/4,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 6,
                amount: 1,
                unit: 1,
            },
            {
                type: "etc",
                name: 2,
                amount: 1/4,
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
    {
        name: "Cuba Libre",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "beverage",
                name: 3,
                unit: 6,
            },
        ],
        ganish: [6]
    },
    {
        name: "Daiquiri",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 7,
                amount: 1 + 3/4,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: 1,
                unit: 2,
            },
        ],
        ganish: []
    },
    {
        name: "Bacardi",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 7,
                amount: 1 + 3/4,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "etc",
                name: 2,
                amount: 1,
                unit: 2,
            },
        ],
        ganish: []
    },
    {
        name: "Tequila Sunrise",
        glass: 5,
        technique: [1, 5],
        ingredient: [
            {
                type: "base",
                name: 8,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 6,
                unit: 6,
            },
            {
                type: "etc",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Margarita",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 8,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: [9]
    },
    {
        name: "Dry Martini",
        glass: 1,
        technique: [2],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: 3,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 20,
                amount: 1/3,
                unit: 1,
            },
        ],
        ganish: [10]
    },
    {
        name: "Negroni",
        glass: 2,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 19,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 15,
                amount: 3/4,
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        name: "Singapore Sling",
        glass: 5,
        technique: [3, 1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: 1,
                unit: 2,
            },
            {
                type: "beverage",
                name: 1,
                unit: 6,
            },
            {
                type: "liqueur",
                name: 5,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: [1, 2]
    },
    {
        name: "Long Island Iced Tea",
        glass: 6,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "base",
                name: 5,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "base",
                name: 6,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "base",
                name: 8,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "etc",
                name: 4,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "beverage",
                name: 3,
                unit: 6,
            },
        ],
        ganish: [6]
    },
    {
        name: "Gin Fizz",
        glass: 4,
        technique: [3, 1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: 1,
                unit: 2,
            },
            {
                type: "beverage",
                name: 1,
                unit: 6,
            },
        ],
        ganish: [3]
    },
    {
        name: "Apricot",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "liqueur",
                name: 4,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "base",
                name: 9,
                amount: 1,
                unit: 2,
            },
            {
                type: "juice",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 6,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Grasshopper",
        glass: 7,
        technique: [3],
        ingredient: [
            {
                type: "liqueur",
                name: 7,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 9,
                amount: 1,
                unit: 1,
            },
            {
                type: "beverage",
                name: 4,
                amount: 1,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "June Bug",
        glass: 6,
        technique: [3],
        ingredient: [
            {
                type: "liqueur",
                name: 1,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 3,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: 2,
                unit: 1,
            },
            {
                type: "etc",
                name: 4,
                amount: 2,
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
    {
        name: "Pousse cafe",
        glass: 6,
        technique: [5],
        ingredient: [
            {
                type: "etc",
                name: 2,
                amount: 1/3,
                unit: 4,
            },
            {
                type: "liqueur",
                name: 7,
                amount: 1/3,
                unit: 4,
            },
            {
                type: "base",
                name: 3,
                amount: 1/3,
                unit: 4,
            },
        ],
        ganish: []
    },
    {
        name: "B-52",
        glass: 9,
        technique: [5],
        ingredient: [
            {
                type: "liqueur",
                name: 13,
                amount: 1/3,
                unit: 4,
            },
            {
                type: "liqueur",
                name: 14,
                amount: 1/3,
                unit: 4,
            },
            {
                type: "liqueur",
                name: 12,
                amount: 1/3,
                unit: 4,
            },
        ],
        ganish: []
    },
    {
        name: "Kir",
        glass: 10,
        technique: [1],
        ingredient: [
            {
                type: "wine",
                name: 1,
                amount: 3,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 6,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        name: "Healing",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 1,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 18,
                amount: 1/3,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 6,
                amount: 1/3,
                unit: 1,
            },
            {
                type: "etc",
                name: 4,
                amount: 1,
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        name: "jindo",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 2,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 8,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 7,
                amount: 3/4,
                unit: 1,
            },
            {
                type: "etc",
                name: 3,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Puppy Love",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 3,
                amount: 1,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 1/3,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 17,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1/3,
                unit: 1,
            },
        ],
        ganish: [7]
    },
    {
        name: "Geumsan",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 4,
                amount: 1 + 1/2,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 13,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 17,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: 1,
                unit: 2,
            },
        ],
        ganish: []
    },
    {
        name: "Gochang",
        glass: 11,
        technique: [2],
        ingredient: [
            {
                type: "traditional",
                name: 5,
                amount: 2,
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: 1/2,
                unit: 1,
            },
            {
                type: "beverage",
                name: 5,
                amount: 2,
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        name: "Fresh Lemon Squash",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "juice",
                name: 8,
                amount: 1/2,
                unit: 5,
            },
            {
                type: "etc",
                name: 1,
                amount: 2,
                unit: 2,
            },
            {
                type: "beverage",
                name: 1,
                unit: 6,
            },
        ],
        ganish: [3]
    },
    {
        name: "Virgin Fruit Punch",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "juice",
                name: 6,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 3,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 4,
                amount: 1,
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: 1/2,
                unit: 1,
            },{
                type: "etc",
                name: 2,
                amount: 1/2,
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
    
];

export default recipes;