import CreatePost from "../components/CreatePost"






export default function page() {
  return (
    <div className="flex pl-20 justify-center min-h-screen">
      <div className="sm:w-1/3 md:w-1/2 w-full self-center">
      <CreatePost/>
      </div>
    </div>
  )
}
