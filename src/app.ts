import cors from 'cors';
import express, { Application } from 'express';
import { categoryRoutes } from './app/modules/categories/categories.route';
import { courseRoutes } from './app/modules/courses/courses.route';
import { reviewRoutes } from './app/modules/reviews/reviews.route';
import globalErrorHandler from './app/middleWare/globalErrorHandler';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/categories', categoryRoutes);

app.use('/api/reviews', reviewRoutes);
app.use('/api', courseRoutes);

app.use(globalErrorHandler);

export default app;
