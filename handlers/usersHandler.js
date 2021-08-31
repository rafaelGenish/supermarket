const Query = require('../database/db')

async function addUser(fname, lname, username, id, city, address, password, role) {
    const q = `INSERT INTO users (f_name, l_name, username, id, city, address, password, role) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`
    return await Query(q, [fname, lname, username, id, city, address, password, role])
}

async function thisUser (username) {
    const q = `SELECT * FROM users WHERE username = ?`
    return await Query (q, [username])
}

async function isUserExist(username) {
    const q = `SELECT * FROM users WHERE usermame = ?`
    const result = await Query(q, [username])
    return result.length
}

async function showAllUsers () {
    return Query(`SELECT * FROM users`)
}

module.exports = { addUser, isUserExist, showAllUsers, thisUser }