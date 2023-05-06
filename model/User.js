const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: Number },
    identification_document: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String },
    neighborhood: { type: String },
    address: { type: String },
    age: { type: Number },
    gender: { type: String },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true }
});

module.exports = model("User", UserSchema);