const express = require("express");
const https = require("https");
const app = express();

app.get("/students", function(req, res){

    https.get("https://localhost:3000/", function(resp){
        console.log(resp.statusCode);
        resp.on("data", function(data){
            const studantData = JSON.parse(data); 
        })
    })

    res.send("server is up and run!");
})

app.post('/students', function(req, res) {
  let requestBody = req.body;
  console.log('object', req);
  let studentName = requestBody.name;
  students.push(studentName);

  res.status(201).json(studentName);
})

app.update('/students', function(req, res) {
    return this.http.put('http://localhost:3000/');
})

app.delete('/students', function(req, res) {
    return this.http.delete('http://localhost:3000/');
})

app.listen(3000, function() {
        console.log(`http://localhost:3000/`);
}) 
