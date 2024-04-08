import prisma from "../../../../prisma/index";
// import { user } from "../../helpers/auth";
export async function POST(req, res, next) {
  console.log("starting auth");
  let payload = await req.json();
  console.log("payload",payload);


  const post = await prisma.post.create({
    data: {
      content: payload.content,
      authorId: 2,
    }
  });

  if(post){
    return Response.json({ success: true, message: "Post Created", 
    data: { post: post }
   });
  }else {
    return Response.json({
      success: false,
      message: "Something wents wrong",
      data: { post: post },
      status: 400,
    });
  }

}

