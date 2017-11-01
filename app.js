var express = require("express");
var blobClient = require("./modules/blob_service");
var app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
    
   response.send("<h1>Main page</h1>");
});

app.listen(3000);