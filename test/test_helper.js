const mongoose = require('mongoose');

beforeEach('Start database', (done) => {
    mongoose.connect('mongodb://localhost:27017/shop', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    mongoose.connection.once('open', () => {
        mongoose.connection.db.dropDatabase().then(() => done());
    });
});


