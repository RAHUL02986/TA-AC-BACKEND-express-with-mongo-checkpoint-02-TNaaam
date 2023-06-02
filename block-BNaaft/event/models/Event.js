let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let eventSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    host: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    category: [String],
    location: String,
    likes: { type: Number, default: 0 },
    remarks: [{ type: Schema.Types.ObjectId, ref: 'Remark', required: true }],
  },
  { timestamps: true }
);

let Event = mongoose.model('Event', eventSchema);

module.exports = Event;
