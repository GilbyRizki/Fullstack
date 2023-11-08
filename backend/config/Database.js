import {Sequelize} from "sequelize";

const db = new Sequelize('pengaduan_frontend','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;