const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/conn');
const route = require('./routes/userRoute')
const cors = require('cors')
// dot config
dotenv.config();

// mongodb connection
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', route);

app.listen(process.env.PORT,() => {
    console.log(`Server is listening at ${process.env.PORT}`);
})