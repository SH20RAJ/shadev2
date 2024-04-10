import prisma from "../../../prisma"

export default async function handler(req, res) {
  const { postId, options } = req.body

  const pollOption = await prisma.pollOption.createMany({
    data: options.map((option) => ({
      post: {
        connect: { id: postId },
      },
      option,
    })),
  })

  res.status(200).json({ pollOption })
}