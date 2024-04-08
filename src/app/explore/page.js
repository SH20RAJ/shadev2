import prisma from "../../../prisma/index";
import Post from "../components/Post";

export default async function page() {
  // Fetch posts from Prisma
  const posts = await prisma.post.findMany({
    take: 10,
    include: {
      author: {
        select: {
          username: true,
          name: true
        }
      }
    }
  });

  console.log(posts); // Check fetched posts in console

  // Render a simple React component
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </ul>
    </>
  );
}


