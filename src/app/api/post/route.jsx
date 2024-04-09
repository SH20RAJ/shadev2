import prisma from "../../../../prisma/index";
import { cookies } from 'next/headers';
import { getCookie , setCookie} from 'cookies-next';
import Encriptor from 'encriptorjs'
import usernametouser from "../../helpers/usernametouser"

export async function POST(req, res, next) {
  let username = atob(Encriptor.decrypt(getCookie('token', { cookies}),process.env.TOKEN_SECRET)) ; 

  let payload = await req.json();    

  let user = await usernametouser(username)


  let userId = user.id;
  const post = await prisma.post.create({
    data: {
      content: payload.content,
      authorId: userId,
    }
  });

  if (post) {
    return Response.json({
      success: true,
      message: "Post Created",
      data: { post: post }
    });
  } else {
    return Response.json({
      success: false,
      message: "Something went wrong",
      data: { post: post },
      status: 400,
    });
  }
}
