const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Admin = require('../models/admin');
const Movie = require('../models/movie');

var multer = require('multer');
const fs = require('fs')

const router = express.Router();

const cloudinary = require("cloudinary");
const cloudinaryConfig = require('../config/cloudinary')
const cloudinaryStorage = require("multer-storage-cloudinary");

const url = 'http://127.0.0.1:4200'
// const url = 'https://careermeze-dev.herokuapp.com'

//Admin Registration
router.post('/register', (req, res, next) => {
    let admin = new Admin(req.body);
    Admin.addUser(admin, (err, adminuser) => {
        if (err) {
            res.json({ success: false, msg: err.message })
        }
        else {
            res.json({ success: true, msg: 'Admin added successfully' })
        }
    })
})

//Admin login
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    Admin.getUserByEmail(email, (err, adminuser) => {
        if (err) throw err;
        if (!adminuser) {
            return res.json({ success: false, msg: 'User not found' })
        }

        Admin.comparePassword(password, adminuser.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(adminuser.toJSON(), config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: adminuser._id,
                        firstname: adminuser.firstname,
                        lastname: adminuser.lastname,
                        email: adminuser.email,
                    }
                })
            }
            else {
                return res.json({ success: false, msg: 'Wrong password' })
            }
        })
    })
});

//Create movie
router.route('/movie/add').post((req, res) => {
    let movie = new Movie(req.body);
    movie.save(movie, (err, movie) => {
        if (err) {
            if (err.errors.name.kind == "unique") {
                res.json({ success: false, msg: "Movie Already Exist" })
            }
            else {
                res.json({ success: false, msg: err.message })
            }
        }
        else {
            res.json({ success: true, msg: 'Movie added successfully', movie: movie })
        }
    })

});


// add movie image to cloudinary

cloudinary.config({
    cloud_name: cloudinaryConfig.cloud_name,
    api_key: cloudinaryConfig.api_key,
    api_secret: cloudinaryConfig.api_secret
});

const imageStorage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "movies",
    allowedFormats: ["jpg", "png"],
});
const imageParser = multer({ storage: imageStorage });
const imageUpload = imageParser.single("img")

router.post('/movie/upload/:id', (req, res) => {
    Movie.findById(req.params.id)
        .exec(function (err, user) {
            if (!user) {
                res.status(400).send('oops! user not found')
            }
            else {
                imageUpload(req, res, function (err) {
                    if (err) {
                        res.json({ success: false, message: err.message })
                    }
                    else {
                        let image = {};
                        image.url = req.file.secure_url;
                        image.publicId = req.file.public_id;
                        user.image = image;
                        user.save()
                        res.json({ success: true, message: "Movie image uploaded successfully", user: user })
                    }
                })
            }
        })
});



// fetch all movies
router.route('/movie/all').get((req, res) => {
    Movie.find((err, movies) => {
        if (err) {
            res.status(400).send("Failed to get movies")
            console.log(err.message)
        }
        else
            res.json({ success: true, movies: movies });
    });
});

//get a single movie
router.route('/movie/:id').get((req, res) => {
    Movie.findById(req.params.id, (err, movie) => {
        if (!movie) {
            res.status(400).send('oops! movie not found')
        }
        else if (err) {
            res.status(400).send('Failed to get movie')
            console.log(err)
        }
        else
            res.json({ success: true, movie: movie });
    });
});


//delete a movie
router.route('/delete/movie/:id').delete((req, res) => {
    Movie.findByIdAndRemove({ _id: req.params.id }, (err, movie) => {
        if (!movie) {
            res.status(400).send('oops! movie not found')
        }
        else if (err) {
            res.status(400).send('Failed to remove movie')
            console.log(err.message);
        }
        else
            res.json({ success: true, mgs: "Movie has been deleted succefully" });
    })
})


// update movie
router.route('/update/movie/:id').put((req, res) => {
    Movie.findById(req.params.id)
        .exec(function (err, movie) {
            if (!movie) {
                res.status(400).send('oops! movie not found')
            }
            else {
                movie.name = req.body.name;
                movie.released = req.body.released;
                movie.genre = req.body.genre;
                movie.director = req.body.director;
                movie.writer = req.body.writer;
                movie.actors = req.body.actors;
                movie.plot = req.body.plot;
                movie.language = req.body.language;
                movie.country = req.body.country;
                movie.awards = req.body.awards;
                movie.save()
                    .then(movie => {
                        res.json({ success: true, movie: movie });
                    })
                    .catch(err => {
                        res.status(400).send('Update failed')
                        console.log(err.message);
                    });
            }
        });
})

module.exports = router;