import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = "mongodb://root:password@localhost:5601/db?authSource=admin"

mongoose.connect(CONNECTION_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error.message));