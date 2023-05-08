
const bcrypt = require("bcrypt")
const Admin = require('/Users/kalic/Desktop/Areas Universidad/5 Semestre/Proyecto I/HabeasDataProject/model/Admin')

const Register = async (req, res) => {
    const { name, identification_document, email, password, confirm_password } = req.body;

    Admin.findOne({ email }).then((admin) => {
        if (admin) {
            return res.json({ mensaje: "There is already a admin with that email" });
        } else if (!name || !identification_document || !email || !password || !confirm_password) {
            return res.json({ mensaje: "Missing Name / Email / Password / Confirm_Password" });
        } else {
            bcrypt.hash(password, 10, (error, passwordHash) => {
                if (error) res.json({ error })
                else {
                    const newAdmin = new Admin({
                        name,
                        identification_document,
                        email,
                        password: passwordHash,
                        confirm_password: passwordHash,
                    })

                    newUser
                        .save()
                        .then((user) => {
                            res.json({ mensaje: "User created successfully", user })
                        })
                        .catch((error) => console.error(error));
                }
            })
        }
    });
};


module.exports = Register;