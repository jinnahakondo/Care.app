const mongoose = require("mongoose")
const uri = process.env.URI
if (!uri) {
    throw new Error('uri not defined')
}

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log('db already connected');
        return;
    }
    else {
        try {
            return mongoose.connect(uri)
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = dbConnect;