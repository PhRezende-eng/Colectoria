// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose() 

// criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//Utilizar o objeto de banco de dados, para nosssas operações
/*

db.serialize(() =>{
    /// com comandos sql eu vou:
    //1 criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2 inserir dados na tabela
    const query = `
    
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
    
    `
    const values = [    
    "https://a-static.mlcdn.com.br/1500x1500/bandana-vila-da-nevoa-renegada-anime-cosplay-naruto-brnerds/brnerds/bandana06/4cab4ff15889d050d897f99e741fc619.jpg",
    "Colecteria",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarina",
    "Rio do sul",
    "Resíduos Eletrônicos, Lâmpadas"
    ]

        function afterInsertData(err){
            if(err){
                return console.log(err)
            }

            
            console.log("Cadastrado com sucesso")
            console.log(this)
        }


    db.run(query, values, afterInsertData)

    //3 consultar os dados da tabela
    //db.all(`SELECT name FROM places`, function(err, rows){
      //  if(err){
       //     return console.log(err)
       // }
        //console.log(`Aqui estão todos os seus registros: `)
        //console.log(rows)
    //})



    //4 deletar um dado da tabela
    //db.run(`DELETE FROM places WHERE id = ?` , [1], function(err){
     //   if(err){
      //      return console.log(err)
       // }
        //console.log("Registro deletado com sucesso")
    //})
})
*/