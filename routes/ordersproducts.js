//
const router = require('express').Router();
//criar associação entre as rotas, pego a pasta models e chamo ela
const models = require('../models');
//aqui ele me traz a model user que está dentro de models
const Order = models.Orders;

// router.get("/", (req, res) => { Order.findAll()
//     .then(orders => {
//         const orderList = orders.map(order => order.dataValues)
//         res.send(orderList)
//     });
// })

// router.get("/:id", (req, res) => { 
//     Order.findByPk(req.params.id)
//     .then(orders => {
//         res.send(orders)
//     });
// })

// router.post('/', (req, res) => Order.create(req.body)
// .then(orders => {
//     res.status(201).send(orders);
//     })
// );

// router.put("/:id", (req, res) => {Order.update({...req.body}, {where: {id: req.params.id}})
//     .then(() => {
//         Order
//         .findByPk(req.params.id)
//         .then(orders => res.send(orders.dataValues))
//     });
// });

// router.delete("/order/:id", (req, res) => {Order.destroy({where: {id: req.params.id}})
//     .then(() => res.sendStatus(200));
// });

module.exports = router;
