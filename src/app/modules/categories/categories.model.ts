import { Schema, model } from 'mongoose';
import { TCategory } from './categories.interface';

const categorieSchema = new Schema<TCategory>({
  name: {
    type: String,
    required: true,
  },
});

export const Category = model<TCategory>('Category', categorieSchema);
