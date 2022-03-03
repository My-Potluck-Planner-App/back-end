const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');
const { validateUser, usernameIsUnique, usernameExists } = require('./auth-middleware');
const { BCRYPT_ROUNDS, JWT_SECRET } = require('../secrets');

router.post('/register', validateUser, usernameIsUnique, async (req, res, next) => {
    try {
        const user = req.user;
        const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);
        user.password = hash;
        let result = await Users.add(user);
        res.status(201).json(result);
    } catch(err) {
        next(err);
    }
});

router.post('/login', validateUser, usernameExists, (req, res, next) => {
    let { username, password } = req.body;
    Users.findBy({ username }).first().then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `Welcome ${user.username}`, token })
        }
        else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    }).catch(err => { res.status(500).json(err) });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = router;