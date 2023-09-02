import { Sequelize } from "sequelize";

const db = new Sequelize (
    {
        host: 'postgres://tareas_ux36_user:lpvu6kGHS6syOoE4FAy1v2GNtzFPC1rT@dpg-cjpa6iojbais7381tk10-a/tareas_ux36',
        username: 'postgres',
        database: 'tareas',
        port: '5432',
        password: 'root',
        dialect: 'postgres'
    }
);
export default db;