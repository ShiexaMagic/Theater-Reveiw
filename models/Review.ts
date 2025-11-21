import mongoose, { Schema, models } from 'mongoose';

const ReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  play: {
    type: Schema.Types.ObjectId,
    ref: 'Play',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create compound index to ensure one review per user per play
ReviewSchema.index({ user: 1, play: 1 }, { unique: true });

const Review = models.Review || mongoose.model('Review', ReviewSchema);

export default Review;
