const router = require('express').Router();
const models = require('../models');
const Product = models.Product;

router.get('/', (req, res) => { Product.findAll()
    .then(products => {
        const productList = products.map(product => product.dataValues)
        res.send(productList)
    });
})

router.get('/:id', (req, res) => { 
    Product.findByPk(req.params.id)
    .then(products => {
        res.send(products)
    });
})

router.get('/:email', (req, res) => { 
    Product.findOne({where: {email:req.params.email}})
    .then(products => {
        res.send(products)
    });
})

router.post('/', (req, res) => Product.create(req.body)
.then(products => {
    res.status(201).send(products);
    })
);

router.put('/:id', (req, res) => {Product.update({...req.body}, {where: {id: req.params.id}})
    .then(() => {
        Product
        .findByPk(req.params.id)
        .then(products => res.send(products.dataValues))
    });
});

router.delete('/:id', (req, res) => {
    Product.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200));
});

module.exports = router;