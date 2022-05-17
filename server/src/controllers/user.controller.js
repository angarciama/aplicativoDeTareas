const db = require('../database/models')

const userCtrl = {}

userCtrl.getAllUsers = async (req, res) => {
    const users = await db.User.findAll();
    res.json(users)
}

userCtrl.createUser = (req, res) => {
    res.json('post to user endpoint')
}

userCtrl.updateUser = (req, res) => {
    res.json('put to user endpoint')
}

userCtrl.deleteUser = (req, res) => {
    res.json('delete to user endpoint')
}

module.exports = userCtrl;