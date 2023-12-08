import { NextFunction, Request, Response } from 'express';
import { reviewServices } from './revies.service';

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const review = req.body;

    const result = await reviewServices.createReview(review);

    //send response
    res.status(201).json({
      sucsess: true,
      statusCode: 201,
      messaage: 'Review created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await reviewServices.getReview();

    //send response
    res.status(200).json({
      sucsess: true,
      statusCode: 200,
      messaage: 'Reviews retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const reviewController = {
  createReview,
  getReview,
};
