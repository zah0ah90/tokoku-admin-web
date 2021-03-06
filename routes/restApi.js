var router = require('express').Router();
var mobileMyProfileC = require('../controllers').mobileMyProfile;
var universalC = require('../controllers').universal;
var mHomeC = require('../controllers').mHome;

router.get('/myprofile/:id',mobileMyProfileC.get);
router.post('/registerCustomer/',mobileMyProfileC.create);
router.post('/myprofile/:id',mobileMyProfileC.update);
router.post('/updatePassword/:id',mobileMyProfileC.updatePassword);
router.get('/lupaSandi/:email',mobileMyProfileC.lupaSandi);

router.get('/getProvinsi',universalC.getProvinsi);
router.get('/getKota/:id_provinsi',universalC.getKota);

router.post('/login',mobileMyProfileC.login);

// MENU HOME
router.get('/barangs',mHomeC.getBarang);
router.get('/barangs/:id',mHomeC.selectBarang);

router.get('/keranjang/:id',mHomeC.getKeranjang);
router.post('/keranjang',mHomeC.addToKeranjang);

module.exports = router;