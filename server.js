const express = require ("express"); 
const port  = 3310;
const path = require("path");
const extRequest = require("./middleware/external");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use("/", express.static(path.join(__dirname, "./public")));

// app.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.get("/holidays", extRequest);

app.listen(port, (err) =>{
  if(err){
    console.log(err); 
  }else{
    console.info(`express port opened at ${port}`);
  }
});