// DELETE THIS LINE
const selectAll = () => {};

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
// const Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// const selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };



const getOne=(req,res)=>{
    let sql=`SELECT * from user WHERE username=${req.body.username}`
    try{
        let result=db.query(sql)
        if(req.body.password===result.password){
            res.status(200).send(result)
        }
        else{
            res.send("Wrong Password")
        }
    } catch(err){
        res.status(500).send(err)
    }
}
const createAccount=(req,res)=>{
    let sql=`INSERT into user userName=${req.body.username} firstName=${req.body.firsName} lastName=${req.body.lastName} password=${req.body.password} profil-photo=${req.body.profilePhoto} role=false `
    try{
        let result=db.query(sql)
       res.status(201).send(result)
    } catch(err){
        res.status(501).send(err)
    }
}

module.exports = {createAccount,getOne, selectAll };
