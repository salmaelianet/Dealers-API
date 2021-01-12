const router = require('express-promise-router')();

const{
    index, newDealer, getDealer, replaceDealer, updateDealer,deleteDealer,getDealersVehicles, newDealerVehicle
} = require('../controllers/dealerController');

router.get('/',index);
router.post('/',newDealer);
router.get('/:dealerId',getDealer);
router.put('/:dealerId',replaceDealer);
router.patch('/:dealerId',updateDealer);
router.delete('/:dealerId',deleteDealer);

router.get('/:dealerId/vehicles',getDealersVehicles);
router.post('/:dealerId/vehicles',newDealerVehicle);
module.exports = router;