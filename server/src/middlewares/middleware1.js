const middleware1 = (req, res, next) => {
    console.log('hola desde middleware1');
    next();
}

module.exports = middleware1;