const { Router } = require('express');

const partnerController = require('../controllers/partners');
// const auth = require('../middleware/auth');

const router = Router();

router.get('/', partnerController.getPartners);

/* router.get('/:id', userController.getOneUser);

router.put('/newReferralCode', auth, userController.createReferralCode);

router.put('/referralCode', auth, userController.updateReferralCode); */

module.exports = router;
