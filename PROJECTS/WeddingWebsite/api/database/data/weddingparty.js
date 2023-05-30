const Member = require("../models/Member");
//Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/weddingDB", { useNewUrlParser: true });

const weddingParty = [];

const Austin = new Member({
    name: "Austin",
    img: "x",
    role: "Groom"
});
weddingParty.push(Austin);

const Skylar = new Member({
    name: "Skylar",
    img: "x",
    role: "Bride"
});
weddingParty.push(Skylar);

const Jacob = new Member({
    name: "Jacob",
    img: "x",
    role: "Best Man"
});
weddingParty.push(Jacob);

const David = new Member({
    name: "David",
    img: "x",
    role: "Groomsman"
});
weddingParty.push(David);

const Andrew = new Member({
    name: "Andrew",
    img: "x",
    role: "Groomsman"
});
weddingParty.push(Andrew);

const Mark = new Member({
    name: "Mark",
    img: "x",
    role: "Groomsman"
});
weddingParty.push(Mark);

const Ryan = new Member({
    name: "Ryan",
    img: "x",
    role: "Groomsman"
});
weddingParty.push(Ryan);

const Jonni = new Member({
    name: "Jonni",
    img: "x",
    role: "Maid of Honor"
});
weddingParty.push(Jonni);

const Aspen = new Member({
    name: "Aspen",
    img: "x",
    role: "Bridesmaid"
});
weddingParty.push(Aspen);

const Ashley = new Member({
    name: "Ashley",
    img: "x",
    role: "Bridesmaid"
});
weddingParty.push(Ashley);

const Madison = new Member({
    name: "Madison",
    img: "x",
    role: "Bridesmaid"
});
weddingParty.push(Madison);

const Lauren = new Member({
    name: "Lauren",
    img: "x",
    role: "Bridesmaid"
});
weddingParty.push(Lauren);

const Bryan = new Member({
    name: "Bryan",
    img: "x",
    role: "Father of Groom"
});
weddingParty.push(Bryan);

const Michele = new Member({
    name: "Michele",
    img: "x",
    role: "Mother of Groom"
});
weddingParty.push(Michele);

for (var i=0; i<weddingParty.length; i++){
    weddingParty[i].save()
    .catch((err) => {
        console.log(err);
    });
}

//Insert Elelements
// Member.insertMany(weddingParty)
// .then(() => {
//     console.log("ok");
// })
// .catch((err) => {
//     console.log(err);
// });