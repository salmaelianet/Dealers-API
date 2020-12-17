const router = require('express-promise-router')();

const{
    index, newDealer, getDealer, replaceDealer, updateDealer,deleteDealer
} = require('../controllers/dealerController');

router.get('/',index);
router.post('/',newDealer);
router.get('/:dealerId',getDealer);
router.put('/:dealerId',replaceDealer);
router.patch('/:dealerId',updateDealer);
router.delete('/:dealerId',deleteDealer);
module.exports = router;