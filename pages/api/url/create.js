import { createUrl } from '@models/Url';

export default async function handler(req, res) {
  const { link, slug } = req.body

  if(!link || !slug || typeof link !== "string") return res.status(400).json({ error: "Invalid query" })

  const url = {
    link,
    slug,
    createdAt: new Date()
  }
  
  const data = await createUrl(url)

  if (!data) return res.status(404).json({ error: "Slug not found" })

  res.status(201).json({msg: "Link shortened!"})
}