import mongoose, { Schema, models } from 'mongoose';

const PlaySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  titleKa: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  theater: {
    type: Schema.Types.ObjectId,
    ref: 'Theater',
    required: true,
  },
  director: {
    type: String,
  },
  directorKa: {
    type: String,
  },
  cast: [{
    type: String,
  }],
  castKa: [{
    type: String,
  }],
  description: {
    type: String,
  },
  descriptionKa: {
    type: String,
  },
  duration: {
    type: Number, // in minutes
  },
  genre: [{
    type: String,
  }],
  genreKa: [{
    type: String,
  }],
  poster: {
    type: String,
  },
  premiereDate: {
    type: Date,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  reviewCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Play = models.Play || mongoose.model('Play', PlaySchema);

export default Play;
