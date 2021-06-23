const admin = connection.define('admin', {
        id_Admin :{ 
            type: sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        fullname :{
            type:sequelize.STRING,
            validate:{
                is:["^[a-zA-Z]+$", 'i']
            }
        },
        email: {
            type:sequelize.STRING,
            allowNull: false,
            isEmail: true,
        },
        passeword:{
            type:sequelize.STRING,
            allowNull: false
        }
    });

module.exports = admin;

  