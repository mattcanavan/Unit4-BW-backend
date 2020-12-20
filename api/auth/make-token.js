const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

module.exports = {
    makeToken(userObj) {
        const payload = {
            subject: userObj.id,
            username: userObj.username,
            // role: userObj.role // what will we name this?
        };

        const options = {
            expiresIn: '900s', // subject to change.
        };
        return jwt.sign(payload, jwtSecret, options);
    }
};