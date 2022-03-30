const Sequelize = require("sequelize");

const sequelize = new Sequelize('sql11481381', 'sql11481381', '73An8s5uEq', {
    host: 'sql11.freesqldatabase.com',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);

db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
    foreignKey: "tutorialId",
    as: "tutorial",
});


module.exports = db;