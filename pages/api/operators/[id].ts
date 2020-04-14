import { NextApiRequest, NextApiResponse } from 'next'

export default (reg: NextApiRequest, res: NextApiResponse) => {
  const num: number = Math.random() * 10;
  num > 5
    ? res.status(200).json({ message: `Успешно!` })
    : res.status(400).json({ message: `Ошибка!` });
  res.end
};
