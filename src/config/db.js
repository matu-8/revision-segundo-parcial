import sequelize from "./database.js";

const inicioDB = async() => {
    try {
        await sequelize.authenticate();
        console.log(">>> Conexión a base de datos exitosa");
        await sequelize.sync();
        
    } catch (error) {
        console.log(">>> Error al establecer la conexión:", error.message);    
    }
};
export default inicioDB;
