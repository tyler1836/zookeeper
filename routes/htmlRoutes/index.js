const path = require('path');
const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.animalRoutes(animalRoutes);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../.../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../.../../public/zookeepers.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;