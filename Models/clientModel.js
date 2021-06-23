const client = connection.define('client',{
        id:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey : true,
        },
        firstName:{
            type: sequelize.STRING,
            allowNull: false,
        },
        lastName : {
            type: sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize.STRING,
            allowNull: false, 
            unique: true
        },
        password : {
            type: sequelize.STRING,
            allowNull: false },
        },
        {tableName: 'client', timestamps: false, underscored: true}
    )

module.exports= client;