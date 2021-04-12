const { Router } = require('express');

const partnerController = require('../controllers/partners');
const {
  createPartnerValidator
} = require('../middlewares/validators/partners');
// const auth = require('../middleware/auth');

const router = Router();

router.get('/', partnerController.getPartners);

router.post('/', createPartnerValidator, partnerController.createPartner);

module.exports = router;
