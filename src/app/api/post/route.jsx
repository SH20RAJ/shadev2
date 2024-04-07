import prisma from "../../../../prisma/index";
export async function POST(req, res, next) {

  let payload = await req.json();
  console.log("payload",payload);

  const user = await prisma.user.create({
    data: {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    }
  });
  console.log(user);
  user.password = undefined;

  if(user){
    return Response.json({ success: true, message: "User Created", 
    data: { user: user }
   });
  }else {
    return Response.json({
      success: false,
      message: "Something wents wrong",
      data: { user: user },
      status: 400,
    });
  }

}

