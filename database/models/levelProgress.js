module.exports = function(sequelize, Sequelize) {
    // Define activity level progress table for activities where different levels are possible
    const status = sequelize.define('levelProgress', {
        dragAndDrop: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        oddOneOut: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        user_id: {
            type: Sequelize.INTEGER,
            unique: true
        }
    }, {
        tableName: 'levelProgress'
    });
    return status;
};
