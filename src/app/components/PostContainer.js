// components/PostsContainer.js

const Post = ({ author, content, likes, comments }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="font-bold">{author}</p>
          <p className="text-gray-500">{likes} Likes</p>
        </div>
        <p className="mb-4">{content}</p>
        <div className="flex justify-between">
          <button className="text-blue-500 hover:text-blue-700">Like</button>
          <button className="text-blue-500 hover:text-blue-700">Comment</button>
        </div>
        <div className="mt-2">
          <p className="text-gray-500">{comments} Comments</p>
        </div>
      </div>
    );
  };
  
  const PostsContainer = ({ posts }) => {
    return (
      <div>
        {posts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    );
  };
  
  export default PostsContainer;
  