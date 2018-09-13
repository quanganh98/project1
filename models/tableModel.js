const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TableModel = new Schema({
    status: { type: String, required: true },
    tableNumber: { type: Number, required: true, unique: true },
    price: { type: String, required: true }
}, {
        timestamps: true
    })

module.exports = mongoose.model('Table', TableModel)