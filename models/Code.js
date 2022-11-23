import { prisma } from '@utils/prisma';

export const createNewCode = async (code) => {
  const res = await prisma.code.create({
    data: code
  })

  return res
}

export const getCode = async () => {
  const res = await prisma.code.findMany({
    include: {
      hifu: true
    }
  })

  return res
}