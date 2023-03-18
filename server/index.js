require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://giabaofakebook:fakebookTsom@fake-book.tmcpu5b.mongodb.net/?retryWrites=true&w=majority`)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server listening on port', PORT));