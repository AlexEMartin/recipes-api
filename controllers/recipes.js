const { response } = require("express");
const Recipe = require("../models/recipe");

const getAllRecipes = async (req, res = response) => {
  const user = req.user._id;

  const data = await Recipe.find({ user });

  const recipes = data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return res.status(200).json(recipes);
};

const addRecipe = async (req, res = response) => {
  const { user, ...body } = req.body;

  const recipeDB = await Recipe.findOne({ name: body.name, user: req.user._id});

  if (recipeDB) {
    return res.status(400).json({
      msg: `The recipe ${recipeDB.name}, already exists`,
    });
  }

  // Generate data
  const data = {
    ...body,
    user: req.user._id,
  };

  const recipe = new Recipe(data);

  // Save to database
  await recipe.save();

  res.status(201).json(recipe);
};

const editRecipe = async (req, res) => {
  const { id } = req.params;
  const { user, ...data } = req.body;

  data.user = req.user._id;

  const recipe = await Recipe.findByIdAndUpdate(id, data);

  res.json(recipe);
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  const deletedRecipe = await Recipe.findByIdAndDelete(id);

  res.json(deletedRecipe);
};

module.exports = {
  getAllRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
