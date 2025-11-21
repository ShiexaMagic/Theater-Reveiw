import mongoose, { Schema, models } from 'mongoose';

const TheaterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nameKa: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  descriptionKa: {
    type: String,
  },
  address: {
    type: String,
  },
  addressKa: {
    type: String,
  },
  website: {
    type: String,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Theater = models.Theater || mongoose.model('Theater', TheaterSchema);

export default Theater;
