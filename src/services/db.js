const mysql = require('mysql2/promise');

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    console.log('Banco de dados conectado.');
    global.dbConnection = connection;
  } catch (err) {
    console.log('Erro ao conectar Banco de dados: ' + err);
  }
}

connect();

module.exports = {};
