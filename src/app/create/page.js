import CreatePost from "../components/CreatePost"
import usernametouser from "../helpers/usernametouser"

let user = await usernametouser("shaswat")



export default function page() {
  return (
    <div className="flex pl-20 justify-center min-h-screen w-full">
      <div className="sm:w-1/3 md:w-1/2 w-full self-center">
      <CreatePost user={user}/>
      </div>
    </div>
  )
}
