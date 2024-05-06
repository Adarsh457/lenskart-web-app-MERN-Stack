const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Mongodb DataBase ${mongoose.connection.host}`);
    } catch(error) {
        console.log(`Mongodb DataBase Error ${error}`);
    }
}

module.exports = connectDB