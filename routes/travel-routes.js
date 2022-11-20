const router = require('express').router()
const {
    getTravel,
    getTravelById,
    createTravel,
    updateTravel,
    deleteTravel } = require('../controler/travel-ctrl')


router.get('/', getTravel)
router.get('getTravelById', getTravelById)
router.post('createTravel', createTravel)
router.put('updateTravel', updateTravel)
router.delete('deleteTravel', deleteTravel)

module.exports = router;