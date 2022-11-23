import { getUrlBySlug } from '@models/Url';

export default async function handler(req, res) {
  const query = req.query["slug"];

  if(!query || typeof query !== "string") return res.status(400).json({ error: "Invalid query" })
  
  const data = await getUrlBySlug(query)

  if (!data) return res.status(404).json({ error: "Not found" })

  res.redirect(data.link)
}