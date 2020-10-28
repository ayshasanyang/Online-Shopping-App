var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/menu.html"));
  // })

  app.get("/", function (req, res) {
    res.render("menu");
  });

  app.get('/signup', function (req, res) {
    res.render('signup');
  });

  app.get("/login", function(req,res){
    res.render("login");
     if(req.user){
       res.redirect("/members")
     }
  })

  app.get("/members", function(req, res) {
    res.render("members")
  })

  app.get("/product", function(req, res) {
    res.render("product-manager")
  })

// app.delete('/product/:id', (req, res) => {
//   const id = req.params.id;
//   db.product.destroy({
//     where: { id: id }
//   })
//     .then(deletedProduct => {
//       res.json(deletedProduct);
//     });
// });

app.delete("/products/:id", function(req, res) {
  db.Product.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbProduct) {
    res.json(dbProduct);
  });
});



  app.get("/product-list", function(req, res) {
    db.Product.findAll({
      include: [db.Post]
    }).then(function(dbProduct) {
      console.log(dbProduct)
      res.render("product-list", {products: dbProduct})
    });
  })


  // new cms 
  app.get("/cms/:id", (req, res)=> {
    Cms.findById(req, params.id, (err,doc)=> {
      if (!err) {
        res.redirect('/product-list');
} else {
    console.log('Error in delete: '+ err);  
}  
    });
  });

  app.post('/cms',(req,res)=>{
    updateOrder(req,res);
});

// Render 404 page for any unmatched routes
app.get("*", function(req, res) {
  res.render("404");
});


};
