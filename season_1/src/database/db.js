// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados psrs nossas operações
// db.serialize(() => {
    // criar uma tabela com comandos sql
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Sucatinha",
    //     "BR 364, Jardim Esperança",
    //     "Nº 260",
    //     "Rondônia",
    //     "Jaru",
    //     "Metais"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     } else {
    //         console.log("Cadastrado com sucesso!")
    //         console.log(this)
    //     }
    // }

    // db.run(query, values, afterInsertData)


    // consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     } else {
    //         console.log("Aqui estão os seus registros: ")
    //         console.log(rows)
    //     }
    // })

    // deletar dados da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     } else {
    //         console.log("Registro deletado com sucesso!")
    //     }
    // })
// })
