const mongoose = require('mongoose')

//? Logging the MongoDB URI from the environment variables
const uri = process.env.MONGODB_URI

//?Connect to MongoDB database using Mongoose
const connectDB = async() => {
    try{
        await mongoose.connect(uri)
        console.log('Connected to MongoDB')

    }catch(e){
        console.error(e.message)
        process.exit(1)
    }
}

module.exports = connectDB