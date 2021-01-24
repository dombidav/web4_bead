const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'web4',
    host: 'localhost',
    port: '3306'
})

let db = {}
db.query = (query, params) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

db.all = (tableName) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${tableName}`, (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

db.where = (tableName, key, operator, value) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${tableName}`, (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

db.one = (tableName, id) =>{
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${tableName} WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err)
            }
            return resolve(results[0])
        })
    })
}

module.exports = db