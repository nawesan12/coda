import { prisma } from "@utils/prisma"

export const getUrlBySlug = async (slug) => {
  const res = await prisma.shortenedLink.findFirst({
    where: {
      slug: {
        equals: slug
      }
    }
  })
  return res
}

export const createUrl = async (url) => {
  const res = await prisma.shortenedLink.create({
    data: url
  })
  return res
}