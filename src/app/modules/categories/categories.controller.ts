import { NextFunction, Request, Response } from 'express';
import { categoryServices } from './categories.service';

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const category = req.body;

    const result = await categoryServices.createCategory(category);

    //send response
    res.status(201).json({
      sucsess: true,
      statusCode: 201,
      messaage: 'Category created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await categoryServices.getCategory();

    //send response
    res.status(200).json({
      sucsess: true,
      statusCode: 200,
      messaage: 'Categories retrieved successfully"',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const categoryController = {
  createCategory,
  getCategory,
};
