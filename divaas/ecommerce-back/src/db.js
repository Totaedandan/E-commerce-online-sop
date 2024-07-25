import mongoose from 'mongoose';

const dbURI = 'mongodb+srv://mkuanyshbekov:Maku257!@cluster0.e4b3bny.mongodb.net/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

export default mongoose;

