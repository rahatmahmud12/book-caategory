import { Schema, model } from 'mongoose';
import { TReview } from './reviews.interface';

const reviewSchema = new Schema<TReview>({
  courseId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
});

export const Review = model<TReview>('Review', reviewSchema);
