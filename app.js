// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

const books =[];
// Home webpage when LocalHost 4000 is searched in browser
app.get("/", (req, res) => {
    res.render("books", { books });
});

// Push new book into array, pops out of stack in books.ejs function
app.post("/addBook", (req, res) => {
    const {title, author, publicationYear} = req.body;
    books.push({title, author, publicationYear});
    res.redirect("/");
});

//Constructor for User object for "create user" function
function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
const users =[];
  app.get("/users", (req, res) => {
        res.render("users");
  });
//POST function to create user and send User object info to userInfo.ejs for display
  app.post("/createUser", (req, res) => {
    const { name, age, email } = req.body;
    const user = new User(name, age, email);
    const { name: userName, age: userAge, email: userEmail } = user;
    res.render("userInfo", { userName, userAge, userEmail });
  });

  const fruits = ["Apple", "Orange", "Banana"];

  app.get("/fruits", (req, res) => {
    res.render("fruits", {fruits});
  });

  app.post("/addFruit", (req, res) => {
    const {fruit} = req.body;
    fruits.push(fruit);
    res.redirect("/fruits");
  });


app.get("/simulateAsync", (req, res) => {
  setTimeout(() => {

    res.json({ message: "Exercise 5: Promises -- Asynchronous operation completed!" });
  }, 2000);
});
// Start the server on port 4000,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
// NOTE
// the quotes are replaced by back ticks ` next to key caps 1
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });