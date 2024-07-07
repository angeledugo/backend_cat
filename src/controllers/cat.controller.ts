import { Request, Response } from 'express';
import { getBreeds, getBreedById, searchBreeds, getImagesByBreedId } from '../services/cat.service';

export const getBreedsHandler = async (req: Request, res: Response) => {
  try {
    const breeds = await getBreeds();
    res.json(breeds);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getBreedByIdHandler = async (req: Request, res: Response) => {
  try {
    const breed_id = req.params.breed_id;
    const breed = await getBreedById(breed_id);
    res.json(breed);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const searchBreedsHandler = async (req: Request, res: Response) => {
  
  try {
    const query = req.query.q as string;
    
    const breeds = await searchBreeds(query);
    res.json(breeds);
  } catch (error) {
    res.status(500).send(error);
  }
};
