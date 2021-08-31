const { addUser, isUserExist, showAllUsers, thisUser } = require('../handlers/usersHandler')

async function register(req, res) {
    const { fname, lname, username, id, city, address, password, role } = req.body
    try {
        const user = isUserExist(username)
        if (!user) {
            res.status(401).json({ error: true, msg: "is user already exist" })
        } else {
            if (!fname, lname, username, id, city, address, password, role) {
                res.status(401).json({ error: true, msg: "some info missing" })
            } else {
                addUser(fname, lname, username, id, city, address, password, role)
                res.status(200).json({ error: false, msg: "user added successfully" })
            }
        }
    } catch (error) {
        res.sendStatus(500)
    }
}

async function signIn(req, res) {
    const { username, password } = req.body
    try {
        const user = thisUser(username)
        if (!user.length) {
            res.status(401).json({ error: true, msg: "is user is not exist" })
        } else {
            if (password !== user.password) {
                res.status(401).json({ error: true, msg: "the password is incorrect" })
            } else {
                res.status(200).json({ error: false, msg: `${xx.lname} welcome!` })
            }
        }
    } catch (error) {
        res.sendStatus(500)
    }
}

async function allUsers(req, res) {
    try {
        const users = await showAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.sendStatus(500)
    }
}

module.exports = { register, signIn, allUsers }