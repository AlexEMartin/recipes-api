const { Router } = require('express');
const { login, register } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { emailExists } = require('../helpers/db-validators');
// const { login, googleSignIn } = require('../controllers/auth');


const router = Router();


router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
],login)

router.post('/register', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('email').custom(emailExists),
    validateFields
],register)


module.exports = router;