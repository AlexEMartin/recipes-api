const { Router } = require("express");
const {
  getAllRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
} = require("../controllers/recipes");
const { validateJWT } = require("../middlewares/validate-jwt");
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get("/get", [validateJWT], getAllRecipes);

router.post("/add", [
        validateJWT,
        check('name', 'Name is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
        check('imagePath', 'Image path is required').not().isEmpty(),
        validateFields
], addRecipe);

router.put("/edit/:id", [validateJWT], editRecipe);

router.delete("/delete/:id", [validateJWT], deleteRecipe);

module.exports = router;
