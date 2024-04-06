// pages/index.js

// import Sidebar from '../components/Sidebar';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

const Home = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="content min-h-screen flex flex-col justify-center w-full">
          {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).map(function (index) {
            return <Post key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
