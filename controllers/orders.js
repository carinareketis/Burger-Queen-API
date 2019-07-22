const models = require('../models');
const Orders = models.Orders;
const OrderItem = models.OrdersProducts;
const Products = models.Product;
const User = models.User;

const getOrders = (req, res) => Orders.findAll({include: [{model: OrderItem, include: [Products]}, User]})
    .then(orders => res.send(orders)
);

const getOrdersById = (req, res) => Orders.findByPk(req.params.id, {include: [{model: OrderItem, include: [Products]}, User]})
    .then(order => order ? res.send(order) : res.sendStatus(404)
);

const postOrders = (req, res) => Orders.create(req.body , {include: [OrderItem]}) 
    .then(order => {
        res.status(201).send(order);
    })

const putOrders = (req, res) => { Orders.update({...req.body}, {where: {id: req.params.id}})
    .then(() => {
        Orders
        .findByPk(req.params.id)
        .then(order => res.send(order))
    });
};

const deleteOrders = (req, res) => {
    OrderItem.destroy({where: { orderId: req.params.id}});
    Orders.destroy({where: { id: req.params.id}})
    .then(() => res.sendStatus(200));
};

module.exports = {
    getOrders,
    getOrdersById,
    postOrders,
    putOrders,
    deleteOrders
}

