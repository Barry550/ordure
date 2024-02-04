const trocCtrl = require('../controllers/trocCtrl')

const router = require('express').Router()

router.route('/trocs')
  .get(trocCtrl.getTrocs)
  .post(trocCtrl.createTrocs)

router.route('/trocs/:id')
  .put(trocCtrl.updateTrocs)
  .delete(trocCtrl.deleteTrocs)



module.exports = router 