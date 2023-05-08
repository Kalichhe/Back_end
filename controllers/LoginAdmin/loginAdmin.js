const bcrypt = require('bcrypt')
const Admin = require('/Users/kalic/Desktop/Areas Universidad/5 Semestre/Proyecto I/HabeasDataProject/model/Admin')

const LoginAdmin = async (req, res) => {
    const { email, password } = req.body;

    Admin.findOne({ email }).then((admin) => {
        if (!admin) {
            return res.json({ mensaje: "Admin not found "});
        }
        bcrypt.compare(password, admin.password).then((itscorrect) => {
            if (itscorrect) {
                const { id, name } = admin;

                res.json({
                    mensaje: "Admin successfully logged in",
                    admin: {
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

module.exports = LoginAdmin