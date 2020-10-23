var db = require("../models");



// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    // console.log(req, "here with req");
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};





// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.User.findAll({}).then(function(dbUser) {
//       res.render("index", {
//         msg: "Welcome!",
//         user: dbUser
//       });
//     });
//   });

//   // Load User page and pass in an User by id
//   app.get("/user/:id", function(req, res) {
//     db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
//       res.render("user", {
//         user: dbUser
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
