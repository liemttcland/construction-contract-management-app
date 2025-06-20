const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  contractCode: { type: String, required: true, unique: true },
  projectName: { type: String, required: true },
  investor: { type: String, required: true },
  contractor: { type: String, required: true },
  signingDate: { type: Date, required: true },
  contractValue: { type: Number, required: true },
  duration: { type: String, required: true },
  status: { type: String, enum: ['Đang thực hiện', 'Đã hoàn thành', 'Hủy'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Contract', contractSchema);
