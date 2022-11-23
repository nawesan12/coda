import { getRandomHifus } from "@models/Hifu";

export default async function handler(req, res) {
  const hifus = await getRandomHifus()

  res.status(200).json(hifus);
}