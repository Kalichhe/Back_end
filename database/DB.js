const mongoose = require("mongoose")

const MONGO_URL = "mongodb+srv://Kalichhe:1001154064carloslopez1@clusterhabeasdataprojec.x1okupz.mongodb.net/?retryWrites=true&w=majority"

const db = async () => {
    await mongoose.connect(MONGO_URL)
    .then(() => console.log("DB Running"))
    .catch(error => console.error(error))
}

module.exports = db