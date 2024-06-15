const Database = require('better-sqlite3');
const db = new Database('./Utils/DataBase/database.db');
const config = require('../config.js')

module.exports = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS bot (
        id TEXT DEFAULT NULL,
        activity TEXT DEFAULT '{"name": "By ruwinou", "type": "5", "status": "online" }',
        owners TEXT DEFAULT '${config.buyers.map(u => `"${u}"`).join(', ')}'
    )`);
    db.exec(`CREATE TABLE IF NOT EXISTS user (
        id TEXT DEFAULT NULL,
        jetons TEXT DEFAULT '0'
    )`);

    db.exec(`CREATE TABLE IF NOT EXISTS guild (
        id TEXT DEFAULT NULL,
        apikey TEXT DEFAULT NULL, 
        items TEXT DEFAULT '[]',
        color TEXT DEFAULT 'Red',
        duration TEXT DEFAULT '2h',
        logs TEXT DEFAULT NULL
    )`);
    return db;
}