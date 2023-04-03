const express = require('express');
require ('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/connection');

const app = express();

const todo = require('./routes/todo');

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

app.use('/api/todo', todo);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});