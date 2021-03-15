const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const routes = require('./routes')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
app.use(routes)
app.listen(PORT, function () {
    console.log(`Server listening on http://localhost:${PORT}`)
})