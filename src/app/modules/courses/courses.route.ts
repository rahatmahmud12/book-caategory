import express from 'express';
import { courseController } from './courses.controller';

const router = express.Router();

router.get('/:courseId/reviews', courseController.getReviewByCourse);
router.get(
  '/:courseId/course-reviews',
  courseController.getReviewAndCourseById,
);
router.post('/', courseController.createCourse);

router.get('/', courseController.getCourse);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);

export const courseRoutes = router;
