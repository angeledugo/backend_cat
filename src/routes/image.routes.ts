import { Router } from 'express';
import { getImagesByBreedIdHandler } from '../controllers/image.controller';


const router = Router();


router.get('/imagesbybreedid', getImagesByBreedIdHandler);

export default router;