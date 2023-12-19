const { Router } = require('express');
const { getAllRecipes, 
        addRecipe, 
        editRecipe, 
        deleteRecipe } = require('../controllers/recipes');
const { validateJWT } = require('../middlewares/validate-jwt');
// const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validar-campos');
// const { login, googleSignIn } = require('../controllers/auth');


const router = Router();


router.get('/get', getAllRecipes);

router.post('/add', [
        validateJWT
],addRecipe);

router.put('/edit/:id', editRecipe);

router.delete('/delete/:id', deleteRecipe);


module.exports = router;