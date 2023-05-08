const { model, Schema } = require("mongoose");

const adminSchema = new Schema({
    name: { type: String, required: true },
    identification_document: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true }
});

module.exports = model("Admin", adminSchema);