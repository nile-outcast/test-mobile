import { NextApiRequest, NextApiResponse } from 'next'
import operatorsList from "../../utils/operatorsList";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(operatorsList);
};
