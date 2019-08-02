const sequelize = require('sequelize')
 
const db = new sequelize('shoppingdb','shopper','mypass',{
   host : 'localhost',
   dialect : 'mysql',
   pool:{
      min:0,
      max:5,
   }
})

const User = db.define('users',{
   id: {
      type : sequelize.INTEGER,
      autoIncrement: true,
      primaryKey:true
   },
   name:{
      type:sequelize.STRING,
      allowNull:false,
   }

})

const Product = db.define('products',{
   id: {
      type : sequelize.INTEGER,
      autoIncrement: true,
      primaryKey:true
   },
   name:{
      type:sequelize.STRING,
      allowNull:false,
   },
   manufucturer:sequelize.STRING,
   price:{
      type:sequelize.FLOAT,
      allowNull:false,
      defaultValue: 0.0,
   }
})


db.sync()
   .then(()=> console.log("db has been created"))
   .catch(()=>console.error("error creating database"))
   
exports = module.exports = {
   User,
   Product
}