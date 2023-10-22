const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const cars = [];

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/add-car', (req, res) => {
    const { make, model, year } = req.body;
    const car = { make, model, year };
    cars.push(car);
    res.redirect('/');
});

app.get('/car-list', (req, res) => {
    res.render('car-list', { cars });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});