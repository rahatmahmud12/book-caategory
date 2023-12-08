import { Schema, model } from 'mongoose';
import { TCourse } from './courses.interface';

// Define the CourseDetails schema
const courseDetailsSchema = new Schema({
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
});

const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: [tagSchema],
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  durationInWeeks: {
    type: Number,
    required: true,
  },
  details: {
    type: courseDetailsSchema,
    required: true,
  },
});

// Create and export the Mongoose model
export const Course = model<TCourse>('Course', courseSchema);
