import mongoose, { Schema, version } from "mongoose"

const user = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    lastName: {type: String, required: true},
    email : {type: String, required: true, unique:true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    active: {type: Boolean, default: false},
    dateBirth: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber : {type: String, required: true}
},
{
    timestamps: true,
    versionKey : false
})

export default mongoose.model("user", user)