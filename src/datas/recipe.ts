import { IRecipe } from "../common/interface/data";

const recipes: IRecipe[] = [
    {
        id: 0,
        name: "Manhattan",
        glass: 1,
        technique: [2],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: "1.1/2",
                unit: 1
            },
            {
                type: "liqueur",
                name: 19,
                amount: "3/4",
                unit: 1
            },
            {
                type: "etc",
                name: 6,
                amount: "1",
                unit: 3
            }
        ],
        ganish: [1],
    },
    {
        id: 1,
        name: "Old Fashioned",
        glass: 2,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: "1.1/2",
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: "1",
                unit: 2,
            },
            {
                type: "etc",
                name: 6,
                amount: "1",
                unit: 3,
            },
            {
                type: "etc",
                name: 6,
                amount: "1",
                unit: 3,
            },
            {
                type: "beverage",
                name: 1,
                amount: "1/2",
                unit: 1
            }
        ],
        ganish: [1,2]
    },
    {
        id: 2,
        name: "New York",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: "1.1/2",
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: "1.1/2",
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: "1",
                unit: 2,
            },
            {
                type: "etc",
                name: 2,
                amount: "1/2",
                unit: 2,
            },
            {
                type: "beverage",
                name: 1,
                amount: "1/2",
                unit: 1
            }
        ],
        ganish: [3]
    },
    {
        id: 3,
        name: "Whiskey Sour",
        glass: 1,
        technique: [3, 1],
        ingredient: [
            {
                type: "base",
                name: 1,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: '1',
                unit: 2,
            },
            {
                type: "beverage",
                name: 1,
                amount: '1',
                unit: 1,
            },
        ],
        ganish: [4, 1]
    },
    {
        id: 4,
        name: "Rusty Nail",
        glass: 1,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 2,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 16,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 5,
        name: "Side car",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 3,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: '1/4',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 6,
        name: "Brandy Alexander",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 3,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 10,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "beverage",
                name: 4,
                amount: '3/4',
                unit: 1,
            },
        ],
        ganish: [5]
    },
    {
        id: 7,
        name: "Honeymoon",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 4,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 18,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '1/4',
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 8,
        name: "Black Russian",
        glass: 2,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 13,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 9,
        name: "Moscow Mule",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1/2',
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
        id: 10,
        name: "Seabreeze",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 3,
                amount: '3',
                unit: 1,
            },
            {
                type: "juice",
                name: 4,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: [3]
    },
    {
        id: 11,
        name: "Cosmopolitan",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 3,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        id: 12,
        name: "Apple Martini",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 5,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 17,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: [7]
    },
    {
        id: 13,
        name: "Pina Colada",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: '1.1/4',
                unit: 1,
            },
            {
                type: "etc",
                name: 5,
                amount: '2',
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: '2',
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
    {
        id: 14,
        name: "Blue Hawaiian",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 21,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 3,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: '2.1/2',
                unit: 1,
            }
        ],
        ganish: [1, 8]
    },
    {
        id: 15,
        name: "Mai-Tai",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: '1.1/4',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 6,
                amount: '1',
                unit: 1,
            },
            {
                type: "etc",
                name: 2,
                amount: '1/4',
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
    {
        id: 16,
        name: "Cuba Libre",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 6,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1/2',
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
        id: 17,
        name: "Daiquiri",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 7,
                amount: '1.3/4',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: '1',
                unit: 2,
            },
        ],
        ganish: []
    },
    {
        id: 18,
        name: "Bacardi",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 7,
                amount: '1.3/4',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "etc",
                name: 2,
                amount: '1',
                unit: 2,
            },
        ],
        ganish: []
    },
    {
        id: 19,
        name: "Tequila Sunrise",
        glass: 5,
        technique: [1, 5],
        ingredient: [
            {
                type: "base",
                name: 8,
                amount: '1.1/2',
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
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 20,
        name: "Margarita",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "base",
                name: 8,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: [9]
    },
    {
        id: 21,
        name: "Dry Martini",
        glass: 1,
        technique: [2],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: '3',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 20,
                amount: '1/3',
                unit: 1,
            },
        ],
        ganish: [10]
    },
    {
        id: 22,
        name: "Negroni",
        glass: 2,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 19,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 15,
                amount: '3/4',
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        id: 23,
        name: "Singapore Sling",
        glass: 5,
        technique: [3, 1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: '1',
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
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: [1, 2]
    },
    {
        id: 24,
        name: "Long Island Iced Tea",
        glass: 6,
        technique: [1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "base",
                name: 5,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "base",
                name: 6,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "base",
                name: 8,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "etc",
                name: 4,
                amount: '1.1/2',
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
        id: 25,
        name: "Gin Fizz",
        glass: 4,
        technique: [3, 1],
        ingredient: [
            {
                type: "base",
                name: 9,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "etc",
                name: 1,
                amount: '1',
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
        id: 26,
        name: "Apricot",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "liqueur",
                name: 4,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "base",
                name: 9,
                amount: '1',
                unit: 2,
            },
            {
                type: "juice",
                name: 2,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 6,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 27,
        name: "Grasshopper",
        glass: 7,
        technique: [3],
        ingredient: [
            {
                type: "liqueur",
                name: 7,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 9,
                amount: '1',
                unit: 1,
            },
            {
                type: "beverage",
                name: 4,
                amount: '1',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 28,
        name: "June Bug",
        glass: 6,
        technique: [3],
        ingredient: [
            {
                type: "liqueur",
                name: 1,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 3,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 2,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: '2',
                unit: 1,
            },
            {
                type: "etc",
                name: 4,
                amount: '2',
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
    {
        id: 29,
        name: "Pousse cafe",
        glass: 6,
        technique: [5],
        ingredient: [
            {
                type: "etc",
                name: 2,
                amount: '1/3',
                unit: 4,
            },
            {
                type: "liqueur",
                name: 7,
                amount: '1/3',
                unit: 4,
            },
            {
                type: "base",
                name: 3,
                amount: '1/3',
                unit: 4,
            },
        ],
        ganish: []
    },
    {
        id: 30,
        name: "B-52",
        glass: 9,
        technique: [5],
        ingredient: [
            {
                type: "liqueur",
                name: 13,
                amount: '1/3',
                unit: 4,
            },
            {
                type: "liqueur",
                name: 14,
                amount: '1/3',
                unit: 4,
            },
            {
                type: "liqueur",
                name: 12,
                amount: '1/3',
                unit: 4,
            },
        ],
        ganish: []
    },
    {
        id: 31,
        name: "Kir",
        glass: 10,
        technique: [1],
        ingredient: [
            {
                type: "wine",
                name: 1,
                amount: '3',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 6,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        id: 32,
        name: "Healing",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 1,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 18,
                amount: '1/3',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 6,
                amount: '1/3',
                unit: 1,
            },
            {
                type: "etc",
                name: 4,
                amount: '1',
                unit: 1,
            },
        ],
        ganish: [4]
    },
    {
        id: 33,
        name: "jindo",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 2,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 8,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 7,
                amount: '3/4',
                unit: 1,
            },
            {
                type: "etc",
                name: 3,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 34,
        name: "Puppy Love",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 3,
                amount: '1',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '1/3',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 17,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1/3',
                unit: 1,
            },
        ],
        ganish: [7]
    },
    {
        id: 35,
        name: "Geumsan",
        glass: 1,
        technique: [3],
        ingredient: [
            {
                type: "traditional",
                name: 4,
                amount: '1.1/2',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 13,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 17,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "juice",
                name: 1,
                amount: '1',
                unit: 2,
            },
        ],
        ganish: []
    },
    {
        id: 36,
        name: "Gochang",
        glass: 11,
        technique: [2],
        ingredient: [
            {
                type: "traditional",
                name: 5,
                amount: '2',
                unit: 1,
            },
            {
                type: "liqueur",
                name: 11,
                amount: '1/2',
                unit: 1,
            },
            {
                type: "beverage",
                name: 5,
                amount: '2',
                unit: 1,
            },
        ],
        ganish: []
    },
    {
        id: 37,
        name: "Fresh Lemon Squash",
        glass: 4,
        technique: [1],
        ingredient: [
            {
                type: "juice",
                name: 8,
                amount: '1/2',
                unit: 5,
            },
            {
                type: "etc",
                name: 1,
                amount: '2',
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
        id: 38,
        name: "Virgin Fruit Punch",
        glass: 5,
        technique: [4],
        ingredient: [
            {
                type: "juice",
                name: 6,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 5,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 3,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 4,
                amount: '1',
                unit: 1,
            },
            {
                type: "juice",
                name: 2,
                amount: '1/2',
                unit: 1,
            },{
                type: "etc",
                name: 2,
                amount: '1/2',
                unit: 1,
            },
        ],
        ganish: [1, 8]
    },
];

export default recipes;