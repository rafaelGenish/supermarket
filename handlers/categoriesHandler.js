const Query = require('../database/db')

async function add (name) {
    const q = `INSERT INTO categories (name) VALUES (?)`
    return await Query (q, [name])
}

async function edit (name, id) {
    const q = `UPDATE categories SET name = ? WHERE id = ?`
    return await Query (q, [name, req.params.id])
}

module.exports = {add, edit}