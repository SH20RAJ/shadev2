import Communities from "./Communities";
import Post from "./Post";
import Signup from "./Signup";
import Videopost from "./Videopost";

export default function Home() {
  return (
    <section className="home">
      <div className="text">Shades</div>

      <div className="content flex p-5">
        <div className="postcontainer sm:w-2/3 w-full">
          <div className="tags p-5 flex justify-around no-wrap overflow-auto w-full">
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
          </div>
          <hr style={{color:'black'}}/>
          <Post />
          <Videopost />
          <Post />
          <Post />
        </div>
        <div className="sidebar2 sticky top-0 ml-2">
          <Signup />
          <Communities/>
        </div>
      </div>
    </section>
  );
}
