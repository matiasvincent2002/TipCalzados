require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

const DB_NAME = "tipcalzados";
const DB_USER = "postgres";
const DB_PASSWORD = "1234";
const DB_HOST = "localhost";

// Conecto las credenciales a la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false,
});
console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

// Manejo el error en caso de que no conecte
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Detener la ejecución de la aplicación en caso de error de conexión
  });

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Asociaciones automáticas
Object.keys(sequelize.models).forEach(modelName => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});

// Relaciones
const { User, Product, Review } = sequelize.models;

// Relación entre User y Product
User.hasMany(Product);
Product.belongsTo(User);

// Relación entre User y Review
User.hasMany(Review);
Review.belongsTo(User);

// Relación entre Product y Review
Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
