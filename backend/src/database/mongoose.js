const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern-todo',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
})