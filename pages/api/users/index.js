import { getUsersCount } from '@models/User';

export default async function handler(req, res) {
  const count = await getUsersCount()

  res.status(200).json({count})
}