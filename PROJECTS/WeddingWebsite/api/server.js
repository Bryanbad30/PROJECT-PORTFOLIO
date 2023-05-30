//Express
const express = require("express");
const app = express();
const weddingParty = require("./database/data/weddingparty");

//Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//Schemas
const Member = require("./database/models/Member");

//Get Members
async function getMembers(){
    const Members = await Member.find({});
    return Members;
}

//Wedding Party API
app.get("/weddingparty", (req, res) => {
    getMembers()
    .then((members) => {
        res.send(members);
    })
    .catch((err) => {
        console.log(err);
    });
});

//Server
app.listen(3001, () => {
    console.log("Server started on port 3001");
});