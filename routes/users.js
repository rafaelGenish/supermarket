const router = require('express').Router()
const { register, signIn, allUsers } = require('../controllers/usersController')

router.post('/register', register)

router.post('/signin', signIn)

router.get('/', allUsers)

module.exports = router