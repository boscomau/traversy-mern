const mongoose = require('mongoose')

const connectDB = async () => {
    try { 
        console.log('URI: ', process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
       

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

// console.log message when connected to DB (sitting outside of connectDB function)
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

module.exports = connectDB