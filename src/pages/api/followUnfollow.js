import prisma from "../../../prisma"

export default async function handler(req, res) {
  const { followerId, followingId } = req.body

  const existingFollow = await prisma.follow.findUnique({
    where: {
      followerId_followingId: { followerId, followingId },
    },
  })

  if (existingFollow) {
    await prisma.follow.delete({
      where: {
        followerId_followingId: { followerId, followingId },
      },
    })

    res.status(200).json({ message: 'Unfollowed' })
  } else {
    const newFollow = await prisma.follow.create({
      data: {
        follower: {
          connect: { id: followerId },
        },
        following: {
          connect: { id: followingId },
        },
      },
    })

    res.status(200).json({ message: 'Followed', newFollow })
  }
}