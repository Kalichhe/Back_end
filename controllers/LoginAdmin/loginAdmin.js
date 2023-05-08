const Admin = require('../../model/Admin')

const Login = async (req, res) => {
    const { email, password } = req.body;

    Admin.findOne({ email }).then((admin) => {
        if (!admin) {
            return res.json({ mensaje: "Admin not found" });
        }
        if (password === admin.password) {
            const { id, name } = admin;

            res.json({
                mensaje: "User successfully logged in",
                admin: {
                    id,
                    name,
                },
            });
        } else {
            return res.json({ mensaje: "Incorrect password"});
        }
    });
};

module.exports = Login
