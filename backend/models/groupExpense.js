// models/groupExpense.js

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  splitAmounts: { type: Map, of: Number, required: true },
  file: { type: String },
});

module.exports = mongoose.model('GroupExpense', expenseSchema);

