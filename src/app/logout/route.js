
import { NextResponse } from "next/server"

export function GET(req,res){

  let responce = NextResponse.json({ success: true,
    message: "User logged out", 

});
responce.cookies.delete({
  name : "token",
})
  return responce;

}