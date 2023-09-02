//Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require ('path');

//create instance of express
const app = express();

//body-parser used to parse the incoming request bodies
app.use(bodyParser.urlencoded({extended: false}));

//set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

//create a route for the home page
//the GET route for the form
app.get('/', (req,res)=> {
    //Render the form and pass in the current student data
    res.render('index');
});

//create a route for user to enter the numbers
app.post("/calculate", (req, res) => {
    const {num1, num2} = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2); 
    res.render("result", {sum, difference, product, quotient});
});

//Start the server on port 4000
var port = 4000;

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});