import { prisma } from '@utils/prisma'

export const registerUser = async (user) => {
  const res = await prisma.user.create({
    data: user
  })

  return res
}

export const getUser = async (id) => {
  const res = await prisma.user.findUnique({
    where: {
      id
    }
  })

  return res
}

export const getUsersCount = async () => {
  const res = await prisma.user.count()

  return res
}

export const getUserByEmail = async (email) => {
  const res = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return res
}

export const getUserByUsername = async (username) => {
  const res = await prisma.user.findUnique({
    where: {
      username
    },
    include: {
      hifus: true
    }
  })

  return res
}