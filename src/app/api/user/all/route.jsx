import prisma from "../../../../../prisma/index";

export async function GET(req, res, slug) {
  const users = await prisma.user.findMany({
    where: {
      //op
    },
    orderBy: {
      id: 'desc',
    },
    // skip: 1,
    // take: 1
  });
  

  if (users.length) {
    return Response.json({
      success: true,
      message: "Users Found",
      data: { users: users },
      status: 200,
    });
  } else {
    return Response.json({
      success: false,
      message: "Not Found",
      data: { users: users },
      status: 404,
    });
  }
}