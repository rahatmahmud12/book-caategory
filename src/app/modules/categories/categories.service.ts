import { TCategory } from './categories.interface';
import { Category } from './categories.model';

const createCategory = async (category: TCategory) => {
  const result = await Category.create(category);
  return result;
};
const getCategory = async () => {
  const result = await Category.find();
  return result;
};

export const categoryServices = {
  createCategory,
  getCategory,
};
