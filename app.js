const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});




const server = app.listen(3000,function () {
    console.log(" listening on port %d", server.address().port);
});