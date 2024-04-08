import { user } from "../helpers/auth";

export default function CreatePost() {
  return (
<div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full max-w-md mx-auto my-4">
  {/* User Info Section */}
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/50"
      alt="User Profile"
      className="w-10 h-10 rounded-full mr-2"
    />
    <div>
      <p className="font-semibold text-gray-900">{user}</p>
    </div>
  </div>
  {/* Post Input Section */}
  <div className="mt-4">
    <textarea
      className="w-full h-20 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
      placeholder="What's on your mind?"
      defaultValue={""}
    />
  </div>
  {/* Post Actions Section */}
  <div className="flex justify-between items-center mt-4">
    <div className="flex items-center">
      {/* Add Image Button */}
      <label
        htmlFor="image-upload"
        className="flex items-center cursor-pointer text-gray-600 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5l-2 2h4.586c.472 0 .826.405.707.854l-.707 2.121a1 1 0 0 1-.707.707L10 18H6a2 2 0 0 1-2-2V8z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4 2a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H8a2 2 0 0 0-1.414.586L4 7.172V6a2 2 0 0 1 2-2h4V2H4z"
            clipRule="evenodd"
          />
        </svg>
        <span>Add Image</span>
      </label>
      <input id="image-upload" type="file" className="hidden" />
    </div>
    {/* Post Button */}
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
      Post
    </button>
  </div>
</div>


  )
}
