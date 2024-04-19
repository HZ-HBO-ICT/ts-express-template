import Express, { Router } from 'express';
import { responseExample, updateExample } from '../controllers/exampleController.js';
import { checkName } from '../middleware/exampleMiddleware.js';
const router: Router = Express.Router();


// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.json('hi');
//   next();
// });
router.get('/example', checkName, responseExample);
router.post('/example', checkName, updateExample);

export default router;
