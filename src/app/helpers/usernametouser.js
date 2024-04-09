import prisma from "../../../prisma/index";


export default async function usernametouser(username) {
    let user = await prisma.user.findMany({
        where: {
          username: username
        }
      })
    return user[0];
}