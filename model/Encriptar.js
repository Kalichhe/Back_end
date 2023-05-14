const bcrypt = require('bcrypt');

const encriptarContraseña = async () => {
    const plainPassword = '1001154064';

    // Generar un salt aleatorio
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Encriptar la contraseña con el salt generado
    const passwordHash = await bcrypt.hash(plainPassword, salt);

    console.log(passwordHash); // Imprime la contraseña hasheada
}

encriptarContraseña();
