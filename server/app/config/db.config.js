module.exports = {
  HOST: "localhost",
  USER: "kirillzagul",
  PASSWORD: "vbrjkf",
  DB: "travelblog",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
