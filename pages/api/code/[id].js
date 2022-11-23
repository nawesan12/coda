import { getHifuById } from '@models/Hifu';

export default async function handler(req, res) {

  const { id } = req.query;

  const hifu = await getHifuById(id)

  res.status(200).json(hifu)
}