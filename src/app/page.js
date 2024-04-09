// pages/index.js

// import Sidebar from '../components/Sidebar';
import Home from './components/Home';
// import { cookies } from 'next/headers';
// import { getCookie , setCookie} from 'cookies-next';
// console.log(getCookie('token', { cookies})); 



const Page = (req,res) => {
  // console.log(res);
  return (
    <>
    <Home />
    </>
  );
};

export default Page;
