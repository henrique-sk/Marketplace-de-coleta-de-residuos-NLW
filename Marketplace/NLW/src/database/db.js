// importar a dependência do sqlite3
// quando uma função está dentromde um objeto, é chamada de método () nesse caso é a "verbose"
// verbose configura o sql3 para mostrar as mensagens no terminal
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
// no terminal, o comando "node src/database/db.js" faz criar o banco de dados

// esse exports possibilita usar a const require que está no server.js
module.exports = db

// utilizar o objeto de banco de dados, para nossas operações
// qdo eu quiser EXECUTAR algum dos comandos abaixo, devo descomentar o SERIALIZE e a função desejada
db.serialize(() => {
    
    // com comandos SQL eu vou:
    
    // // 1 Criar uma tabela (tem que usar a crase para a quebra de linha funcionar)
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         adress TEXT,
    //         adress2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2 Inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         adress,
    //         adress2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // // a function é uma callback, vai ser executada somente depois que tudo o mais já tiver executado no DB
    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // //
    // //
    // db.run(query, values, afterInsertData)
    //
    //
        
    // 3 Consultar um dado da tabela
    // entre SELECT e FROM, o "*" quer dizer todos os dados, poderia ser p.ex.: id,name,adress
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })

    // 4 Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [6], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro(s) deletado(s) com sucesso!")
    // })

})