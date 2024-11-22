const express = require('express');
const router = express.Router();
const workSheetController = require('../controllers/workSheetController');

router.post('/workSheets', workSheetController.createSheet);
router.get('/workSheets', workSheetController.getAllSheets);
router.get('/workSheets/:id', workSheetController.getSheetById);
router.put('/workSheets/:id', workSheetController.updateSheet);
router.delete('/workSheets/:id', workSheetController.deleteSheet);

// router.get('/check-db', workSheetController.checkDbConnection);


module.exports = router;