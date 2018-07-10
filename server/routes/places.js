import { Router } from 'express';

import { searchPlaces, getPlace } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
} from '../lib/placeHelper';

const router = Router();

router.get('/:id', async (req, res) => {
  const place = await getPlace(req.params.id);
  res.send(place);
});
router.get('/', async (req, res) => {
  console.log(req, res);
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

export default router;
