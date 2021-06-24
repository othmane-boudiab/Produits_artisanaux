// var db = require('../config/database'),
// seq = db.seq,
// Sequelize = db.Sequelize;

// module.exports = function(app) {
//     app.get('/admin',function(req,res){
//         var Users = require('../Models/adminModel')(app); //since i am binding to a single object - app
//         seq.sync().then(function () {
//             Users.findAll({
//                attributes: ['id_Admin', 'fullname', 'email', 'passeword']
//            }).then(function (admin) {
//                     users.forEach(function(admin,index,arr){
//                         console.log(admin.id_Admin);
//                     });
//                 });
//         });
//     });

// }

