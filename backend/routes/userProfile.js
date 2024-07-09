// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const userController = require('../controllers/userControllers');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/'); 
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + '-' + file.originalname); 
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only images are allowed'), false);
//   }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// router.put('/:id', upload.single('photo'), userController.updateUser);

// module.exports = router;
