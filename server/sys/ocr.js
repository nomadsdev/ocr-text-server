const Tesseract = require('tesseract.js');
const fs = require('fs');

const processOCR = (filePath, languages = 'eng+tha') => {
    return Tesseract.recognize(filePath, languages, {
        logger: m => console.log(m)
    });
};

exports.ProcessImage = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    processOCR(req.file.path)
        .then(result => {
            fs.unlinkSync(req.file.path);

            res.json({ text: result.data.text });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error processing image.');
        });
};