const { Task } = require('../database/models')

taskController = {}

taskController.getAllTasks = async (req, res) => {
    console.log(req.auth.id);
    const tasks = await Task.findAll({
        where: {UserId: req.auth.id}
    });
    res.json(tasks);
}


module.exports = taskController;