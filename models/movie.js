const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const MovieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    released: String,
    runtime: String,
    genre: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    language: String,
    country: String,
    awards: String,
    image: {
        url: String,
        publicId: String
    }

});

const Movie = module.exports = mongoose.model("Movie", MovieSchema);

MovieSchema.plugin(uniqueValidator, { message: 'Error, expected to be unique.' });