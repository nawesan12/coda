import { NextApiRequest, NextApiResponse } from 'next'
 // @ts-ignore
import { registerUser } from '@models/User'
import { hashPassword, id } from '@utils/unique'

export default async function handler(req, res) {
  const { name, username, email, password, website } = req.body

  const user = await registerUser({
    id: id(),
    name,
    username,
    email,
    password: await hashPassword(password),
    avatar: `https://avatars.dicebear.com/api/micah/${username}.svg`,
    createdAt: new Date().toLocaleDateString(),
    bio: "",
    website: website || null
  })

  res.status(201).json(user)
}