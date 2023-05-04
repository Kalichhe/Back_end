
const User = require("/Users/kalic/Desktop/Areas Universidad/5 Semestre/Proyecto I/HabeasDataProject/model/User")


const GerUserById = async (req, res) => {
    const { userId } = req.params;

    if (userId.length === 24) {
        User.findById(userId).then((user) => {
            if (!user) {
                return res.json({ mensaje: "Usuario no encontrado" });
            } else {
                const { _id, name, last_name, phone, identification_document, email, city, neighborhood, address, age, gender, password, confirm_password, __v, ...resto } = user._doc;
                res.json(resto);
            }
        });
    } else {
        res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
    }
};

module.exports = GerUserById;
