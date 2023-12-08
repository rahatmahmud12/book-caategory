import { Schema } from 'mongoose';

type TCourseDetails = {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
};
type TTags = {
  name: string;
  isDeleted: boolean;
};
export type TCourse = {
  title: string;
  instructor: string;
  categoryId: Schema.Types.ObjectId;
  price: number;
  tags: TTags[];
  startDate: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: TCourseDetails;
};
