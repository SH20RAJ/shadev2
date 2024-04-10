import prisma from "../../../prisma"

export default async function handler(req, res) {
  const { content, postId, userId } = req.body

  const comment = await prisma.comment.create({
    data: {
      content,
      post: {
        connect: { id: postId },
      },
      user: {
        connect: { id: userId },
      },
    },
  })

  res.status(200).json({ comment })
}