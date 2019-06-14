module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    goal: DataTypes.STRING,
    completetionDate: DataTypes.TEXT,
    ms1: DataTypes.STRING,
    ms2: DataTypes.STRING,
    ms3: DataTypes.STRING,
    ms4: DataTypes.STRING,
    ms5: DataTypes.STRING
  });
  return Example;
};


// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
  
//   return Example;
// };


//CHANGE THE NAME OF THE FILE TO USER.JS

// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     // Giving the User model a name of type STRING
//     userName: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: DataTypes.STRING,
   
//   });

//   User.associate = function(models) {
//     // Associating User with Posts
//     // When an User is deleted, also delete any associated Posts
//     User.hasMany(models.Post, {
//       onDelete: "cascade"
//     });
//   };

//   return User;
// };
