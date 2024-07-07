import { Request, Response } from 'express';
import { getImagesByBreedId } from '../services/cat.service';


export const getImagesByBreedIdHandler = async (req: Request, res: Response) => {
    try {
      const breed_id = req.query.breed_id as string;
      const images = await getImagesByBreedId(breed_id);
      res.json(images);
    } catch (error) {
      res.status(500).send(error);
    }
  };