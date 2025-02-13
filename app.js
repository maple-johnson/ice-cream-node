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
     res.render('admin');
});

app.listen(PORT, () => {
     console.log(`Server is running at http://localhost:${PORT}`);
});