const express = require("express");
const db = require("./config/db");
const cors = require("cors");



const app = express();
const PORT = 3001;

app.use(cors());    
app.use(express.json());


app.post('/Register', (req,res)=> {

    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    const email = req.body.email 
    const password = req.body.password

    db.query(
        "INSERT INTO users (FirstName,LastName,email,password) Values(?,?,?,?)", 
    [FirstName, LastName, email,password],
    (err,result) => {
        console.log(err);
        }
        
    
    );
});

app.post('/Login', (req,res) => {

    const email = req.body.email 
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?", 
    [email,password],
    (err,result) => {
        if(err) {

            res.send({err:err});

        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message:"Wrong email or password try again "});
        }
      }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });


