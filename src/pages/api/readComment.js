import prisma from "../../../prisma"

export default async function handler(req, res) {
  const comments = await prisma.comment.findMany()

  res.status(200).json({ comments })
}