import express from 'express';
import { courseController } from './courses.controller';

const router = express.Router();
router.get('/best', courseController.getBestCourse);
router.get('/:courseId/reviews', courseController.getReviewAndCourseById);
router.put('/:courseId', courseController.updateCourse);

router.post('/', courseController.createCourse);

router.get('/', courseController.getCourse);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);

export const courseRoutes = router;
