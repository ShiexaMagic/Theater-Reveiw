import mongoose, { Schema, models } from 'mongoose';

const PromoCodeSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  discount: {
    type: Number,
    required: true,
    default: 10, // 10% discount
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PromoCode = models.PromoCode || mongoose.model('PromoCode', PromoCodeSchema);

export default PromoCode;
