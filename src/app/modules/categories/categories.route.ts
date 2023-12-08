import express from 'express';
import { categoryController } from './categories.controller';

const router = express.Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategory);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);

export const categoryRoutes = router;
