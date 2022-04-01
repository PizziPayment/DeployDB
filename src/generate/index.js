const { rewriteTables, alterTables } = require("pizzi-db");

async function createTables(config) {
    const sequelize = await rewriteTables(config)
    sequelize.close()
    console.log("Tables created.")
}

async function syncTables(config) {
    const sequelize = await alterTables(config)
    sequelize.close()
    console.log("Table synchronized.")
}

exports.createTables = createTables
exports.syncTables = syncTables
