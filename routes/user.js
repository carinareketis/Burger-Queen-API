const router = require('express').Router();
//criar associação entre as rotas, pego a pasta models e chamo ela

const models = require('../models');
//aqui ele me traz a model user que está dentro de models
const User = models.User;

router.get("/", (req, res) => { User.findAll()
    .then(users => {
        // User.findOne({where: {id:req.params.id}})
        // const userList = users.map(user => user.dataValues)
        // res.send(userList)
        res.send(users)

    });
})

router.get("/:id", (req, res) => { 
    User.findByPk(req.params.id)
    .then(users => {
        res.send(users)
    });
})

router.post('/', (req, res) => User.create(req.body)
.then(user => {
    res.status(201).send(user);
    })
);

router.put("/:id", (req, res) => {User.update({...req.body}, {where: {id: req.params.id}})
    .then(() => {
        User
        .findByPk(req.params.id)
        .then(user => res.send(user.dataValues))
    });
});

router.delete("/:id", (req, res) => {
    User.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200));
});

module.exports = router;
