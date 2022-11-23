import { prisma } from '@utils/prisma';

export const createNewHifu = async (hifu) => {
  const res = await prisma.hifu.create({
    data: hifu
  })

  return res
}

export const getRandomHifus = async () => {
  const res = await prisma.hifu.findMany({
    include: {
      code: {
        select: {
          html: true,
          css: true,
          js: true
        }
      },
      author: {
        select: {
          username: true,
          name: true
        }
      }
    }
  })

  return res
}

export const getHifuById = async (id) => {
  const res = await prisma.hifu.findUnique({
    where: {
      id
    },
    include: {
      code: true,
      author:true
    }
  })

  return res
}

export const getHifusByAuthor = async (authorId) => {
  const res = await prisma.hifu.findMany({
    where: {
      authorId
    },
    include: {
      code: true
    }
  })

  return res
}

export const getHifusByTitle = async (title) => {
  const res = await prisma.hifu.findMany({
    where: {
      title
    }
  })

  return res
}

export const getLatestHifus = async (limit) => {
  const res = await prisma.hifu.findMany({
    take: limit,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res
}

export const getHifusCount = async () => {
  const res = await prisma.hifu.count()

  return res
}