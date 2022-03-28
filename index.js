const { Sequelize, Model, DataTypes } = require('@sequelize/core');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('sql11481381', 'sql11481381', '73An8s5uEq', {
    host: 'sql11.freesqldatabase.com',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

async function start() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        User = await defineUser()
        createJane(User)

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function createJane(User) {

}

async function defineUser() {
    const User = sequelize.define("user", {
        name: DataTypes.TEXT,
        favoriteColor: {
            type: DataTypes.TEXT,
            defaultValue: 'green'
        },
        age: DataTypes.INTEGER,
        cash: DataTypes.INTEGER
    });

    (async () => {
        await sequelize.sync({ force: true });
        // Code here
        const jane = await User.create({ name: "Jane" });

        const user = await User.create({
            name: 'alice123',
            age: 12
        });

        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
    })();
}

start()

