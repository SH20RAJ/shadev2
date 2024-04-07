
import Encriptor from 'encriptorjs';
import { cookies } from 'next/headers'
const cookieStore = cookies()
 
export default async function Cookie() {
  const cookieStore = cookies()
  let token = cookieStore.get('token')
  return token;
}

export async function getUser() {
  const cookieStore = cookies()
  if(cookieStore.has('token')){
    let token = cookieStore.get('token')
    console.log("token",token.value);
    var username = Encriptor.decrypt(token.value, process.env.TOKEN_SECRET)
    username = atob(username)
  } else {
    var username = undefined;
  }
  console.log("user2", username);
  return username;
}

export const user = await getUser();
console.log("dd",await getUser());
export async function logout(data) {
  cookies().delete('token')
}