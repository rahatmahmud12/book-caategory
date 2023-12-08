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
const updateCourse = async (courseId: string, payload: Partial<TCourse>) => {
  const { tags, details, ...otherData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...otherData,
  };

  if (tags && Object.keys(tags).length) {
    for (const [key, value] of Object.entries(tags)) {
      modifiedUpdatedData[`tags.${key}`] = value;
    }
  }

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value;
    }
  }

  const result = await Course.findByIdAndUpdate(courseId, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
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
  updateCourse,
  getCourseAndReviewById,
};
