const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Movie = require('../models/movie');


const router = express.Router();

router.post('/register', (req, res, next) => {
    let newUser = new User(req.body);
    // let newUser = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     type: req.body.type,
    //     username: req.body.username,
    //     password: req.body.password
    // });
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add user' })
        }
        else {
            res.json({ success: true, msg: 'User added successfully' })
        }
    })
});



// authenticate user
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' })
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'bearer ' + token,
                    user: {
                        id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        email: user.email
                    }
                })
            }
            else {
                return res.json({ success: false, msg: 'Wrong password' })
            }
        })
    })
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

// fetch all movies
router.route('/movie/all').get((req, res) => {
    Movie.find((err, movie) => {
        if (err) {
            res.status(400).send("Failed to get movies")
            console.log(err.message)
        }
        else
            res.json({ success: true, movie: movie });
    }).limit(6);
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

// add favourite
router.route('/:id/movie/favorite/add').post((req, res) => {
    User.findById(req.params.id)
        .exec(function (err, user) {
            if (!user) {
                res.status(400).send('oops! user not found')
            }
            else {
                user.favorites.push(req.body.favorite);
                user.save()
                    .then(user => {
                        res.json({ success: true, user: user });
                    })
                    .catch(err => {
                        res.status(400).send('Update failed')
                        console.log(err.message);
                    });
            }
        });
})

// add favourite
router.route('/:id/movie/favorite/remove').post((req, res) => {
    User.findById(req.params.id)
        .exec(function (err, user) {
            if (!user) {
                res.status(400).send('oops! user not found')
            }
            else {

                let index = user.favorites.indexOf(req.body.favorite);
                if (index > -1) {
                    user.favorites.splice(index, 1);
                }

                user.save()
                    .then(user => {
                        res.json({ success: true, user: user });
                    })
                    .catch(err => {
                        res.status(400).send('Update failed')
                        console.log(err.message);
                    });
            }
        });
})

// get all favorite movies
router.post('/movie/favorite/all', (req, res) => {
    Movie.find({ _id: { $in: req.body.favorites } }, (err, movies) => {
        if (err) {
            res.status(400).send("Failed to get all movies")
            console.log(err.message)
        }
        else
            res.json({ success: true, movies: movies });
    })
});


// search movie
router.route('/search').post((req, res) => {
    const searchText = req.body.searchText;
    Movie.find({ "name": { $regex: searchText, $options: "$i" } })
        .exec((err, movies) => {
            if (err) {
                res.status(400).send("Failed to movies")
                console.log(err.message)
            }
            else
                res.json({ success: true, movies: movies });

        });
});




module.exports = router;

