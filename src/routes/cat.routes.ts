import { Router } from 'express';
import { getBreedsHandler, getBreedByIdHandler, searchBreedsHandler } from '../controllers/cat.controller';

const router = Router();

router.get('/breeds/search', searchBreedsHandler);
router.get('/breeds/:breed_id', getBreedByIdHandler);
router.get('/breeds', getBreedsHandler);




export default router;