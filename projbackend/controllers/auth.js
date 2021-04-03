const User = require("../models/user");
const jwt = require('jsonwebtoken');
const Doctor = require("../models/doctor");

exports.signout = (req, res) => {
    res.clearCookie("token");
    res.json({
        "message": "Signout"
    });
}


exports.signin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err)
            return res.status(400).json({
                error: "User email does not exits"
            });
        else {
            if (user == null) {
                res.status(400).json({
                    error: "No User found"
                });
            }
            else {
                if (user.password === password) {
                    const token = jwt.sign({ _id: user._id }, "shhhh")
                    res.cookie("token", token, { expire: new Date() + 9999 });
                    const { _id, name, email, role } = user;
                    return res.json({ token, user: { _id, name, email, role } })
                }
                else {
                    res.status(400).json({
                        error: "Password doen't match"
                    });
                }
            }
        }
    })

}



exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err)
            return res.status(400).json({
                err: "Not Able to save user"
            });
        else
            res.json({
                username: user.username,
                email: user.email,
                id: user._id
            });
    });
}

exports.getDoctor = (req, res) => {
    const _id = req.params.id;
    Doctor.findOne({ _id}, (err, doctor) => {
        if (err)
            return res.status(400).json({
                error: "Doctor email does not exits"
            });
        else {
            if (doctor == null) {
                res.status(400).json({
                    error: "No User found"
                });
            }
            else {
                res.status(200).json(doctor);
            }
        }
    })
}

exports.getPatient = (req, res) => {
    const _id = req.params.id;
    User.findOne({ _id}, (err, user) => {
        if (err)
            return res.status(400).json({
                error: "user id does not exits"
            });
        else {
            if (user == null) {
                res.status(400).json({
                    error: "No User found"
                });
            }
            else {
                res.status(200).json(user);
            }
        }
    })
}