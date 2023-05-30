const mongoose = require("mongoose");
const Schema = mongoose.Schema;
		
const MemberSchema = new Schema({
	name: {
	    type: String,
			required: true,
			unique: true
		},
	img: String,
	role: String
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;