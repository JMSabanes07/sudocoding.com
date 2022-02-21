import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const post = await prisma.posts.findMany({
        include: { tags: true },
      })
      res.status(200).json(post)
    } catch (error) {
      res.status(400).json(error)
    }
  } else if (req.method === 'POST') {
    const data = req.body
    console.log(data)
    try {
      const post = await prisma.posts.create({
        data,
        include: { tags: true },
      })
      res.status(200).json(post)
    } catch (error) {
      res.status(400).json(error)
    }
  } else if (req.method === 'UPDATE') {
    res.status(200).json({})
  } else if (req.method === 'DELETE') {
    res.status(200).json({})
  } else {
    res.status(400).send('Unauthorized')
  }
}
