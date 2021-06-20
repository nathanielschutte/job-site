const mongoose = require('mongoose');

const connectDB = async () => {
    //console.log('connecting to DB @', process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error('Could not connect!\n', err);
        process.exit(1);
    }
};

module.exports = connectDB;