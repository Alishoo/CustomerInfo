import express from "express"
import mysql from "mysql"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"ali123",
database:"customerinfo"
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors())

app.get("/customer", (req,res)=>{
    const q = "select * from customer"
    db.query(q, (err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/customer", (req, res) => {
    const q = "INSERT INTO customer (`name`, `phoneNumber`, `address`, `age`, `gender`) VALUES (?)";
  
    const values = [
      req.body.name,
      req.body.phoneNumber,
      req.body.address,
      req.body.age,
      req.body.gender,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json("data saved");
    });
  });

app.listen(8800, ()=>{
    console.log("listen to 8800!!!!!!!!!!")
})