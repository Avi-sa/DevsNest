const { emailValidate, passwordValidate } = require("../utils/validation");


const registerCheck = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;

    if (
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        password === confirmPassword &&
        email.length > 1 &&
        password.length >= 8 &&
        emailValidate(email) &&
        passwordValidate(password)
    ) {
        next();
    } else {
        res.status(401).send('Initial checks failed');
    }
}

module.exports = registerCheck;