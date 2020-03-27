const Sequelize = require('sequelize');
const db = require('../config/database');

// const Gig = db.define('gig', {
//   title: {
//     type: Sequelize.STRING
//   },
//   technologies: {
//     type: Sequelize.STRING
//   },
//   description: {
//     type: Sequelize.STRING
//   },
//   budget: {
//     type: Sequelize.STRING
//   },
//   contact_email: {
//     type: Sequelize.STRING
//   }
// })

const Gig = db.define("gigs", {
  title: Sequelize.STRING,
  technologies: Sequelize.STRING,
  description: Sequelize.STRING,
  contact_email: Sequelize.STRING
});

// Syncs with DB
Gig.sync();

module.exports = Gig;