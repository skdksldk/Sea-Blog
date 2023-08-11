const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require('path');
require("dotenv").config();
var cors = require('cors');
var cookieParser = require('cookie-parser');

const errorHandler = require('./middleware/error');
require('dotenv').config();

//import routes
const authRoutes = require('./routes/authRoutes');
const postRoute = require('./routes/postRoute');

const MONGO_URI = process.env.DATABASE; // 환경 변수로부터 MongoDB 연결 문자열을 가져옵니다.

if (!MONGO_URI) {
    console.error('MongoDB connection string not found. Please set the MONGO_URI environment variable.');
    process.exit(1);
}

//database connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());

//ROUTES MIDDLEWARE
app.use('/api', authRoutes);
app.use('/api', postRoute);

__dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(` Server running on port ${port}`);
})

