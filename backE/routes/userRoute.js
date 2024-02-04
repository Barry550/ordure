const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const router = require('express').Router()


//auth
router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.put('/update/:id', userCtrl.updateUser)
router.delete('/delete/:id', userCtrl.deleteUser)
router.get('/refresh_token', userCtrl.refreshtoken)

//payement
router.patch('/payement/:id', userCtrl.createPayement)
router.get('/getpayement/:id', userCtrl.getPayement)

//ventes et trocs
router.patch('/ventes/:id', userCtrl.ventes)
router.patch('/trocs/:id', userCtrl.trocs)

//receive vente and troc for user
router.patch('/historyVentes', auth, userCtrl.historyVentes)
router.patch('/historyTrocs',auth, userCtrl.historyTrocs)

//Abonnement
router.patch('/abonne/:id', userCtrl.abonne)
router.patch('/desabonne/:id', userCtrl.desabonne)

//user
router.get('/infor',auth, userCtrl.getUser)
router.get('/', userCtrl.getUsers)  
router.get('/infore/:id', userCtrl.getUserId)

//valider
router.patch('/valideVente',auth, userCtrl.valideVente)
router.patch('/valideTroc',auth, userCtrl.valideTroc)

router.patch('/deleteVente/:id', userCtrl.deteteVente)
router.patch('/deleteTroc/:id', userCtrl.valideTroc)

//ramassage
router.get('/userRamassage', userCtrl.getUserRamassage) 

//recyclage
router.get('/userRecyclage', userCtrl.getUserRecyclage) 

//cart
router.patch('/addCart', auth, userCtrl.addCart)
router.patch('/deleteCart', auth, userCtrl.deleteCart)

//history
router.get('/history', auth, userCtrl.history)
router.get('/listes', auth, userCtrl.listes)


module.exports = router