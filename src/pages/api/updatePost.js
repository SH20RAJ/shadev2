import prisma from "../../../prisma"

export default async function handler(req, res) {
  const { id, content, image, contentURL, type } = req.body

  const post = await prisma.post.update({
    where: { id },
    data: {
      content,
      image,
      contentURL,
      type,
    },
  })

  res.status(200).json({ post })
}