const express = require('express');
const multer = require('multer');
const Ocr = require('../sys/ocr');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), Ocr.ProcessImage);

module.exports = router;