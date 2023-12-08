import { Schema } from 'mongoose';

type TCourseDetails = {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
};

export type TCourse = {
  title: string;
  instructor: string;
  categoryId: Schema.Types.ObjectId;
  price: number;
  skills: string[];
  startDate: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: TCourseDetails;
};
