const mysql = require("mysql")

module.exports = function getConnection() {
    return mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "cdc",
        port: 32769 
    })
}
