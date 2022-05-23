import type { NextApiRequest, NextApiResponse } from 'next'
import data from './data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Projects>
) {
  res.status(200).json(data);
}
