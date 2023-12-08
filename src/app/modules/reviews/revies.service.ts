import { TReview } from './reviews.interface';
import { Review } from './reviews.model';

const createReview = async (review: TReview) => {
  const result = await Review.create(review);
  return result;
};
const getReview = async () => {
  const result = await Review.find();
  return result;
};

export const reviewServices = {
  createReview,
  getReview,
};
