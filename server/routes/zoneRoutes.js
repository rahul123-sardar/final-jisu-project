const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {getzone,createzone} = require('../controllers/zoneController');


router.post('/',upload.single('image'),createzone);
router.get('/',getzone);

module.exports = router;