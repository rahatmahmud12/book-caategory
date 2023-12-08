import { Review } from '../reviews/reviews.model';
import { TCourse } from './courses.interface';
import { Course } from './courses.model';

const createCourse = async (course: TCourse) => {
  const result = await Course.create(course);
  return result;
};
const getCourse = async () => {
  const result = await Course.find();
  return result;
};
const getReviewByCourse = async (courseId: string) => {
  const result = await Review.find({ courseId });
  return result;
};
const getCourseAndReviewById = async (courseId: string) => {
  const course = await Course.findById(courseId);
  const reviews = await Review.find({ courseId });
  const result = { course, reviews };
  return result;
};

export const courseServices = {
  createCourse,
  getCourse,
  getReviewByCourse,
  getCourseAndReviewById,
};
