import Link from "next/link";
let Post = async ({ post }) => {


  let content = "";
  if(post.type == "image"){
    content = '<img src='+post.contentURL+' alt="Post Image" className="mt-2 rounded-sm" />'
  }
  if(post.type == "video"){
    let json = {"posterurl":post.image,"id":post.contentURL}
    json =  btoa(JSON.stringify(json));
    // console.log("json",json);
    content = '<iframe style="width:100%" height="350"  scrolling="no" src="https://sh20raj.github.io/VideoPlyr/plyr.html?id='+json+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture" allowfullscreen> </iframe>'
  }


  return (
    <>
      <div className="max-w-xl mx-auto my-8">
        <div className="bg-white rounded-lg shadow-md">
          {/* Post Header */}
          <div className="flex items-center px-4 py-3 border-b">
            <img
              src="https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F788719%2F0012e877-5660-4495-97b5-60a3d7f9121e.jpg"
              alt="Profile Picture"
              className="h-10 w-10 rounded-full mr-2 bg-contain	"
            />
            <div>
              <Link href="https://github.com/sh20raj" target="_">
                <h3 className="text-lg font-semibold">
                  {post.author.name}{" "}
                  <span className="text-sm text-gray-600">
                    @{post.author.username}
                  </span>
                </h3>{" "}
              </Link>
              <p className="text-sm text-gray-600">Posted on {""}</p>
            </div>
          </div>
          {/* Post Content */}
          <div className="px-4 py-2">
            <p className="text-lg">{post.content}</p>
            {
              <div dangerouslySetInnerHTML={{ __html: content }} />
             
            }
          </div>
          {/* Post Actions */}
          <div className="flex items-center justify-between px-10 py-2 border-t">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
              <span>40</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <span>2</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span>20</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              {/*         <span>Save</span> */}
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                />
              </svg>
              {/*         <span>Share</span> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
