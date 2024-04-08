import prisma from "../../../../prisma/index";
export async function POST(req, res, next) {

  let payload = await req.json();
  console.log("payload",payload);

  const post = await prisma.post.create({
    data: {
      content: payload.content,
      authorId: 4,
    }
  });

  if(user){
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

