

// const M_category = require('../Models/categoryModel');

// // display all categories
// exports.all_category=function(req,res){
//     M_category.findAll().
//         then((data) => {
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log("this is the error".error);
//         });
// }

// // display one category by id
// exports.category=function(req,res){
//     M_category.findById(req.params.id).
//     then((data) => {
//         res.json(data);
//     })
//     .catch((error) => {
//         console.log("this is the error".error);
//     });
// }

// // add a category 
// exports.Add_category=function(req,res){
//    const forme = req.params

//    M_category.create(forme);
//    res.send(`hi, your category has name ${forme.Name_category} is add to database`)
//    .catch((error)=>{
//        console.log("this is the error".error)
//    })
// }



























// add category
// let form = req.body;
// M_category.create(form).
//     then((data) => {
//         res.json(data);
//     })
//     .catch((error) => {
//         console.log(("this is the error".error));
//     });