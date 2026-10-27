import {Router} from 'express';
import categoryRouter from '../categories/category.route';
import courseClassRouter from '../course-class/course-class.route';


const router = Router();


router.use('/category',categoryRouter);
router.use('/course_class',courseClassRouter);


export default router;