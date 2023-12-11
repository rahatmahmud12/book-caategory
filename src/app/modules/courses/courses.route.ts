import express from 'express';
import { courseController } from './courses.controller';

const router = express.Router();
router.get('/course/best', courseController.getBestCourse);
router.get(
  '/courses/:courseId/reviews',
  courseController.getReviewAndCourseById,
);
router.put('/courses/:courseId', courseController.updateCourse);

router.post('/course', courseController.createCourse);

router.get('/courses', courseController.getCourse);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);

export const courseRoutes = router;
