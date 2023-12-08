import express from 'express';
import { reviewController } from './reviews.controller';

const router = express.Router();

router.post('/', reviewController.createReview);
router.get('/', reviewController.getReview);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);

export const reviewRoutes = router;
