//"const db = require('../database/models')" Como este controlador es de usuarios se destructura
const { User } = require('../database/models')

const userCtrl = {}

userCtrl.getAllUsers = async (req, res) => {
    //Si no se hubise destructurado "const db = require('../database/models')"
    //const users = await db.User.findAll();
    const users = await User.findAll();
    res.json(users)
}

userCtrl.createUser = async (req, res) => {
    const { name, lastName, email, password } = req.body;
    const user = await User.create({ name, lastName, email, password });

    res.json(user)
}

userCtrl.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        where: {
            email 
        }
    });
    if (await user.validPassword(password)) {
        return res.json('Usuario login OK')
    }else{
        res.json('Usuario/contraseña invalido')
    }
}

userCtrl.updateUser = (req, res) => {
    res.json('put to user endpoint')
}

userCtrl.deleteUser = (req, res) => {
    res.json('delete to user endpoint')
}

module.exports = userCtrl;