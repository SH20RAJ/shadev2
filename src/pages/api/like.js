import prisma from '../../../prisma/index';

export default async function handler(req, res) {
    console.log("Hiiiiiii");
  if (req.method === 'POST') {
    // const { postId, userId } = req.body;
    let postId = 11;
    let userId = 4;

    try {
      // Check if the post and user exist
      const post = await prisma.post.findUnique({
        where: { id: parseInt(postId) },
      });

      const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });

      if (!post || !user) {
        return res.status(404).json({ error: 'Post or user not found' });
      }

      const checkLikes = await prisma.like.findMany({
        where: {
          postId: post.id,
          userId: user.id,
        },
      });

      if (checkLikes.length) {
        return res.status(400).json({ error: 'You have already liked this post' });
      }

      // Create a new Like
      const newLike = await prisma.like.create({
        data: {
          user: { connect: { id: user.id } },
          post: { connect: { id: post.id } },
        },
      });

      return res.status(200).json(newLike);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
