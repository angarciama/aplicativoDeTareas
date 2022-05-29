//"const db = require('../database/models')" Como este controlador es de usuarios se destructura
const { User, Task } = require('../database/models')
const jwt = require('jsonwebtoken');


const userCtrl = {}

userCtrl.getAllUsers = async (req, res) => {
    //Si no se hubise destructurado "const db = require('../database/models')"
    //const users = await db.User.findAll();
    const users = await User.findAll({
        attributes: ['name', 'lastName', 'email'],
        include: [{model: Task, attributes: ['description', 'done']}]
    });
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
    if (user && await user.validPassword(password)) {
        const token = jwt.sign({ email: user.email, id: user.id }, 'NocqVerXvLvLtyvquEJF');
        return res.json(token)
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