const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    password: "",
    database: "super",
    host: "localhost",
    insecureAuth: true
})

db.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connect to db')
    }
})

const Query = (q, params) => {
    return new Promise((resolve, rejcet) => {
        db.query(q, params, (err, result) => {
            if (err) {
                rejcet (err)
            } else {
                resolve (result)
            }
        })
    })
}

module.exports = Query