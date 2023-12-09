import { Review } from '../reviews/reviews.model';
import { TCourse } from './courses.interface';
import { Course } from './courses.model';

type QueryParameters = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  minPrice?: string;
  maxPrice?: string;
  tags?: string;
  startDate?: string;
  language?: string;
  provider?: string;
  durationInWeeks?: string;
  level?: string;
};

const createCourse = async (course: TCourse) => {
  const result = await Course.create(course);
  return result;
};
const getCourse = async (payload: Record<string, unknown>) => {
  const {
    page = 1,
    limit = 10,
    sortBy = 'title',
    sortOrder = 'asc',
    minPrice,
    maxPrice,
    tags,
    startDate,
    language,
    provider,
    durationInWeeks,
    level,
  }: QueryParameters = payload;

  // Build filter object based on provided query parameters
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  if (minPrice) filter.price = { $gte: parseFloat(minPrice) };
  if (maxPrice) filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
  if (tags) filter['tags.name'] = { $in: Array.isArray(tags) ? tags : [tags] };
  if (startDate) filter.startDate = startDate;
  if (language) filter.language = language;
  if (provider) filter.provider = provider;
  if (durationInWeeks) filter.durationInWeeks = durationInWeeks;
  if (level) filter['details.level'] = level;

  console.log(filter);

  // const pageNumber = parseInt(page) || 1;
  // const pageLimit = parseInt(limit) || 10;

  const totalCourses = await Course.countDocuments();
  const totalPages = Math.ceil(totalCourses / limit || 10);

  const data = await Course.find(filter)
    .sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 })
    .skip((page - 1) * limit)
    .limit(limit || 10);

  const meta = {
    page,
    limit,
    total: totalPages,
  };
  return { meta, data };
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
