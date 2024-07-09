const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');
const Friend = require('../models/Friend');

router.post('/addexpense', async (req, res) => {
  try {
    const { category, description, amount, payer, participants, splitMethod, notes } = req.body;
    const expense = new Expense({ category, description, amount, payer, participants, splitMethod, notes });
    const result = await expense.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error adding expense' });
  }
});

router.get('/getexpenses', async (req, res) => {
  try {
    const expenses = await Expense.find({}).populate('payer participants');
    res.status(200).json(expenses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});

router.get('/getexpense/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findById(id).populate('payer participants');
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching expense' });
  }
});

router.put('/updateexpense/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const options = { new: true };
    const expense = await Expense.findByIdAndUpdate(id, updatedData, options).populate('payer participants');
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating expense' });
  }
});

router.delete('/deleteexpense/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Expense.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting expense' });
  }
});

module.exports = router;
