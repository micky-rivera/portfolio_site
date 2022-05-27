import type { NextApiRequest, NextApiResponse } from 'next'
import projectData from './projectData'
import techData from './techData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AppData>
) {
  const response = {
    projects: projectData,
    tech: techData
  };
  res.status(200).json(response);
}
