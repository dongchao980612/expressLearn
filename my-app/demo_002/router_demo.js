const express = require('express');

const router = express.Router();




router.get('/',(req, res) => {
    res.send({"name":"小明", "age":28}); 
  });
  
router.post('/', (req, res) => {
    res.send('Post express!');   
});

router.delete('/', (req, res) => {
    res.send('Delete express!');   
});

router.put('/', (req, res) => {
    res.send('Put express!');   
});

module.exports = router;
