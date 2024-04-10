import prisma from "../../../prisma"



export default async function handler(req, res) {
  const { userId, type, subjectId } = req.body

  const notification = await prisma.notification.create({
    data: {
      userId,
      type,
      subject: {
        connect: { id: subjectId },
      },
    },
  })

  res.status(200).json({ notification })
}
