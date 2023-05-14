
const bcrypt = require("bcrypt")
const User = require('/Users/kalic/Desktop/Areas Universidad/5 Semestre/Proyecto I/HabeasDataProject/model/User')

const Register = async (req, res) => {
    const { name, last_name, phone, identification_document, email, city, neighborhood, address, age, gender, password, confirm_password } = req.body;

    User.findOne({ email }).then((user) => {
        if (user) {
            return res.json({ mensaje: "There is already a user with that email" });
        } else if (!name || !last_name || !phone || !email || !city || !address || !gender || !password || !confirm_password) {
            return res.json({ mensaje: "Missing Name / Last_Name / Phone / Email / City / Address / Gender / Password / Confirm_Password" });
        } else {
            bcrypt.hash(password, 10, (error, passwordHash) => {
                if (error) res.json({ error })
                else {
                    const newUser = new User({
                        name,
                        last_name,
                        phone,
                        identification_document,
                        email,
                        city,
                        neighborhood,
                        address,
                        age,
                        gender,
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