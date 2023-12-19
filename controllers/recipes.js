

const getAllRecipes = ( req, res ) => {
    res.json({ msg: 'getAllRecipes' });
}

const addRecipe = ( req, res ) => {
    res.json({ msg: 'addRecipe' });
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