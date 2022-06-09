import type { NextApiRequest, NextApiResponse } from 'next'
import projectData from './projectData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Projects>
) {
  const response = projectData;
  res.status(200).json(response);
}
