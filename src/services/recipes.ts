import { ref } from "../utils";

const recipeList = [{
    id: 'asdf1234',
    name: 'Dutch Baby',
    ingredients: [{
        name: 'large eggs',
        amount: 4,
    }, {
        name: 'whole milk',
        amount: 0.75,
        measure: 'cup',
    }, {
        name: 'sugar',
        amount: 3,
        measure: 'tbsp',
    }, {
        name: 'vanilla',
        amount: 1,
        measure: 'tsp',
    }, {
        name: 'orange zest',
        amount: .5,
        measure: 'tsp',
    }, {
        name: 'salt',
        amount: .75,
        measure: 'tsp',
    }, {
        name: 'flour',
        amount: .75,
        measure: 'cup',
    }, {
        name: 'butter',
        amount: 2,
        measure: 'tbsp',
    }],
    steps: [{
        description: 'Place a 12 inch cast iron skillet in the center of the oven. Preheat oven to 450F, and let skillet preheat.',
    }, {
        description: 'Vigorously whisk the eggs, milk, sugar, vanilla, orange zest, and salt in a large bowel until smooth.',
    }, {
        description: 'Gently whisk in the flour until no large lumps remain.',
    }, {
        description: 'Carefully add butter to the preheated skillet, tilting to coat the bottom and sides.',
    }, {
        description: 'Pour batter into the skillet and immediately return to the oven.',
    }, {
        description: 'Bake until pancake is puffed and golden brown around the edges, and the center is set but custardy, about 10 to 12 minutes.',
    }],
    with: ref(['recipesById', 'asdf5678'])
}, {
    id: 'asdf5678',
    name: 'Cranberry Compote',
    ingredients: [{
        name: 'cranberries',
        amount: 8,
        measure: 'ounce',
    }, {
        name: 'orange zest',
        amount: 3,
        measure: 'strips',
    }, {
        name: 'ground cardamom',
        amount: .25,
        measure: 'tsp',
    }, {
        name: 'maple syrup',
        amount: .5,
        measure: 'cup',
    }, {
        name: 'salt',
        amount: .75,
        measure: 'tsp',
    }, {
        name: 'water',
        amount: 4.33,
        measure: 'cup',
    }],
    steps: [{
        description: 'Combine cranberries, strips of orange zest, cardamom, maple syrup, salt, and water in a saucepan.',
    }, {
        description: 'Cook, stirring often and reducing heat as needed until the craberries have burst and thickened. About 5-10 minutes.',
    }, {
        description: 'Transfer to a bowel to cool.',
    }],
}, {
    id: 'asdf9876',
    name: 'Desert Dry Brine',
    ingredients: [{
        name: 'star anise',
        amount: 6,
        measure: 'whole',
    }, {
        name: 'fennel seeds',
        amount: 2,
        measure: 'tbsp',
    }, {
        name: 'kosher salt',
        amount: 0.5,
        measure: 'cup',
    }, {
        name: 'maple sugar',
        amount: 0.25,
        measures: 'cup',
    }, {
        name: 'fresh thyme',
        amount: 1,
        measure: 'tbsp',
    }, {
        name: 'crused red pepper flakes',
        amount: 2,
        measure: 'tsp',
    }],
    steps: [{
        description: 'Toast the star anise and fennel seeds in a small skillet over medium heat, stirring often, until fragrent, about 2 minutes',
    }, {
        description: 'Transfer to a food processor; add salt, maple suger, thyme, and red pepper flakes.'
    }, {
        description: 'Pulse to blend, about 30 seconds.'
    }],
}];

export const recipes = {
    fetch: async(ids:string[]) => {
        return new Promise((resolve, reject) => {
            const res = recipeList.filter(r => ids.includes(r.id));
            resolve(res);
        })
    }
};