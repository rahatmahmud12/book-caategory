import { NextFunction, Request, Response } from 'express';
import { courseServices } from './courses.service';

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const course = req.body;

    const result = await courseServices.createCourse(course);

    //send response
    res.status(201).json({
      sucsess: true,
      statusCode: 201,
      message: 'Course created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.query;
    const result = await courseServices.getCourse(payload);

    //send response
    res.status(200).json({
      sucsess: true,
      statusCode: 200,
      messaage: 'Courses retrieved successfully"',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getReviewAndCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseId = req.params.courseId;
    const result = await courseServices.getCourseAndReviewById(courseId);

    //send response
    res.status(200).json({
      sucsess: true,
      statusCode: 200,
      messaage: 'Course and Reviews retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseId = req.params.courseId;
    const payload = req.body;
    const result = await courseServices.updateCourse(courseId, payload);

    //send response
    res.status(200).json({
      sucsess: true,
      statusCode: 200,
      messaage: 'Course updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const courseController = {
  createCourse,
  getCourse,
  updateCourse,

  getReviewAndCourseById,
};
