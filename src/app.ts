import cors from 'cors';
import express, { Application } from 'express';
import { categoryRoutes } from './app/modules/categories/categories.route';
import { courseRoutes } from './app/modules/courses/courses.route';
import { reviewRoutes } from './app/modules/reviews/reviews.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/categories', categoryRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/reviews', reviewRoutes);

export default app;
