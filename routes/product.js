//
const router = require('express').Router();
//criar associação entre as rotas, pego a pasta models e chamo ela
const models = require('../models');
//aqui ele me traz a model user que está dentro de models
const Product = models.Product;

router.get("/", (req, res) => { Product.findAll()
    .then(products => {
        const productList = products.map(product => product.dataValues)
        res.send(productList)
    });
})

router.get("/:id", (req, res) => { 
    Product.findByPk(req.params.id)
    .then(products => {
        res.send(products)
    });
})

router.get("/:email", (req, res) => { 
    Product.findOne({where: {email:req.params.email}})
    .then(products => {
        
        // const userList = users.map(user => user.dataValues)
        res.send(products)
    });
})

router.post('/', (req, res) => Product.create(req.body)
.then(products => {
    res.status(201).send(products);
    })
);

router.put("/:id", (req, res) => {Product.update({...req.body}, {where: {id: req.params.id}})
    .then(() => {
        Product
        .findByPk(req.params.id)
        .then(products => res.send(products.dataValues))
    });
});

router.delete("/:id", (req, res) => {
    Product.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200));
});

module.exports = router;