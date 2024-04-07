
let User = async ({params}) => {
    console.log("res",params);
    let fetchUser = async () => {
        let user = await fetch("http://localhost:3000/api/user/"+ params.user+ "")
        return user.json();
    }
    
    let user = await fetchUser();
    let {username} = user.data.users[0];

  return(
          <>

          This is the user page of USER {username}
          
          
          
          

          </>

    )

}

export default User;