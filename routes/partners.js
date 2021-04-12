const { Router } = require('express');

const partnerController = require('../controllers/partners');
// const auth = require('../middleware/auth');

const router = Router();

router.get('/', partnerController.getPartners);

router.post('/', partnerController.createPartner);

module.exports = router;
