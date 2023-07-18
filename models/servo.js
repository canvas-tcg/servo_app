const db = require('../database')

function findAll() {
    const sql = `SELECT * FROM servos LIMIT 10;`
    return db.query(sql).then(res => res.rows)
}


const Servo = {
    findAll
}

module.exports = Servo;