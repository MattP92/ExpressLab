const express = require("express");
const router = express.Router();
const items = [
                {
            ID: "1",
            Product: "Apple",
            Price: "$10",
            Quantity: "5"
                },
                
                {
            ID: "2",
            Product: "Banana",
            Price: "$12",
            Quantity: "6"
                },

                {
            ID: "3",
            Product: "Orange",
            Price: "$14",
            Quantity: "7"
                }];

router.get('/cart-items', (req, res) => {
res.send(items); 
});

router.post('/cart-items', (req, res) => {
    if(req.body) {
        res.send('Here is the information');
    } else {
        res.sendStatus(400);
    }
});

router.put('/:id', (req, res) => {
    res.send(`URL ID ${req.param.id} ${req.body.stuff}`);
});

router.delete('/:id', (req, res) => {
    res.send(`URL ID ${req.param.id}`);
});

module.exports = router; 