module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        title: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING
        }
    });
    return Comment;
};