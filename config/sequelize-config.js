import { Sequelize } from "sequelize";
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Amanda15##',
    database: 'lojaNode',
    timezone: '-03:00'
})

export default connection;