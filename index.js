var express = require('express');
var app = express();




// This is just the basic setup
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
	res.render("game")
});



app.listen(8080, () => {
	console.log("Listening on port: 8080");
});