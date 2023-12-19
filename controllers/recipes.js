const { response } = require("express");
const Recipe = require('../models/recipe');


const getAllRecipes = async( req, res = response ) => {

    const user = req.user._id;
    
    const data = await Recipe.find({ user });

    const recipes = data.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });

    res.json({
        recipes
    });

}

const addRecipe = async( req, res = response ) => {

    const { user, ...body } = req.body;

    const recipeDB = await Recipe.findOne({ name: body.name });

    if(recipeDB) {
        return res.status(400).json({
            msg: `The recipe ${ recipeDB.name }, already exists`
        });
    }

    // Generate data
    const data = {
        ...body,
        user: req.user._id
    }

    const recipe = new Recipe(data);

    // Save to database
    await recipe.save();

    res.status(201).json(recipe);
}

const editRecipe = ( req, res ) => {
    res.json({ msg: 'editRecipe' });
}

const deleteRecipe = ( req, res ) => {
    res.json({ msg: 'deleteRecipe' });
}

module.exports = {
    getAllRecipes,
    addRecipe,
    editRecipe,
    deleteRecipe
}

// {
//     "name": "Pollo al horno 2",
//     "description": "Pollo al horno con papas",
//     "ingredients": [],
//     "imagePath": "image url"
// }