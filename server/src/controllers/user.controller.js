const userCtrl = {}

userCtrl.getAllUsers = (req, res) => {
    res.json('get to users endpoint')
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