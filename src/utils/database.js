import { Sequelize } from "sequelize";

const db = new Sequelize (
    {
        host: 'postgres://tareas_ux36_user:lpvu6kGHS6syOoE4FAy1v2GNtzFPC1rT@dpg-cjpa6iojbais7381tk10-a/tareas_ux36',
        username: 'tareas_ux36_user',
        database: 'tareas_ux36',
        port: '5432',
        password: 'lpvu6kGHS6syOoE4FAy1v2GNtzFPC1rT',
        dialect: 'postgres'
    }
);
export default db;