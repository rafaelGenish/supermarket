const Query = require('../database/db')

async function getAllProducts() {
    return await Query(`SELECT * FROM products`)
}

async function addProduct(name, categoryId, price, picture) {
    const q = `INSERT INTO products (name, category_id, price, picture) values (?, ?, ?, ?)`
    return await Query(q, [name, categoryId, price, picture])
}

module.exports = { getAllProducts, addProduct }