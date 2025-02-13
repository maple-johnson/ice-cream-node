import express from 'express';

const  app = express();
const PORT = 3000;
const orders = [];

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
     res.render('home');
});

app.get('/admin', (req, res) => {
     res.render('admin', { orders });
});

app.post('/thankyou', (req, res) => {
     
     const order = {
          name: req.body.name,
          email: req.body.email,
          flavor: req.body.flavor,
          cone: req.body.cone,
          toppings: req.body.toppings,
          comment: req.body.comment
     };

     orders.push(order);

     console.log(order);
     res.render('confirm', { order });
});

app.listen(PORT, () => {
     console.log(`Server is running at http://localhost:${PORT}`);
});