
const User = require("../../model/User")


const GetUserById = async (req, res) => {
    const { userId } = req.params;

    if (userId.length === 24) {
        User.findById(userId).then((user) => {
            if (!user) {
                return res.json({ mensaje: "User not found" });
            } else {
                const { _id, last_name, phone, identification_document, city, neighborhood, address, age, gender, password, confirm_password, __v, ...resto } = user._doc;
                res.json(resto);
            }
        });
    } else {
        res.json({ mensaje: "You are sending an incorrect password" });
    }
};

module.exports = GetUserById;
