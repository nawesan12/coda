import { getUserByUsername } from '@models/User';

export default async function handler(req, res) {
  const { username } = req.query;

  const user = await getUserByUsername(username);
  
  if (!user) {
    return res.status(400).json({msg: "This user does not exist!"});
  } 

  res.status(200).json(user)
}