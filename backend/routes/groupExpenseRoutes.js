
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Expense = require('../models/groupExpense');
const Group = require('../models/group');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/addExpense', upload.single('file'), async (req, res) => {
  try {
    const { category, description, amount, splitAmounts, group } = req.body;
    const file = req.file;

    const existingGroup = await Group.findById(group);
    if (!existingGroup) {
      return res.status(404).json({ error: 'Group not found' });
    }

    const expense = new Expense({
      category,
      description,
      amount,
      splitAmounts: JSON.parse(splitAmounts),
      file: file ? file.path : null,
    });

    await expense.save();

    res.status(201).json({
      message: 'Expense added successfully',
      data: { category, description, amount, splitAmounts, file },
    });
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
