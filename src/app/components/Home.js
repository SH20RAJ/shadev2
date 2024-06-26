import { getUser, user } from "../helpers/auth";
import Page from "../explore/page";
import Communities from "./Communities";
import Login from "./Login";
import Signup from "./Signup";
import Videopost from "./Videopost";

// console.log("opsh",user);

export default function Home() {
  return (
    <section className="home w-full">
      <div className="text">Shades {user && " - "+ user}</div>

      <div className="content flex p-5">
        <div className="postcontainer w-full md:w-2/3 ">
          <div className="tags p-5 flex justify-around no-wrap overflow-auto w-full">
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              New
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Trending
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              {user}
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Memes
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Top
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Sports
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Education
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              Coding
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              DevOps
            </button>
            <button className="hover:bg-purple-50 m-2 text-black bg-white py-2 px-4 border border-blue-700 rounded">
              NextJS
            </button>
          </div>
          <hr style={{color:'black'}}/>
        
          <Page/>
        </div>
        <div className="sidebar2 hidden md:block md:w-1/3 sticky top-0 ml-2">
          {!user && <><Signup /> <Login /></>}
          
          <Communities/>
        </div>
      </div>
    </section>
  );
}
