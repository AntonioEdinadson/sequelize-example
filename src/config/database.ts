import { DataTypes, Sequelize, Dialect } from "sequelize";
import tedious from "tedious";

let sequelize: Sequelize;
const env = process.env.NODE_ENV || 'development';

DataTypes.DATE.prototype._stringify = function _stringify(date: any, options: any) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const config = {
    development: {
        username: process.env.DBPROD_USER!,
        password: process.env.DBPROD_PASS!,
        database: process.env.DBPROD_NAME!,
        host: process.env.DBPROD_HOST!,
        dialect: "mssql",
    },
    production: {
        username: process.env.DBDEV_USER!,
        password: process.env.DBDEV_PASS!,
        database: process.env.DBDEV_NAME!,
        host: process.env.DBDEV_HOST!,
        dialect: "mssql",
    }
};

if (env === 'production') {
    sequelize = new Sequelize(
        config.production.database,
        config.production.username,
        config.production.password, {
        dialect: config.production.dialect as Dialect,
        dialectModule: tedious,
        dialectOptions: {
            encrypt: false,
            trustServerCertificate: true,
        }
    });
} else {
    sequelize = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password, {
        dialect: config.development.dialect as Dialect,
        dialectModule: tedious,
        dialectOptions: {
            encrypt: false,
            trustServerCertificate: true,
        }
    });
}

export default sequelize;