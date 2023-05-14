const bcrypt = require('bcrypt')
const User = require('/Users/kalic/Desktop/Areas Universidad/5 Semestre/Proyecto I/HabeasDataProject/model/User')

const Login = async (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.json({ mensaje: "User not found" });
        }
        bcrypt.compare(password, user.password).then((itscorrect) => {
            if (itscorrect) {
                const { id, name } = user;

                res.json({
                    mensaje: "User successfully logged in",
                    user: {
                        id,
                        name,
                    },
                });
            } else {
                return res.json({ mensaje: "Incorrect password"});
            }
        });
    });
};

module.exports = Login