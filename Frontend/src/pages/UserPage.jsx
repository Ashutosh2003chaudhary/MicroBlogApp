
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
function UserPage() {
  

    return (
     <>
    <UserHeader/>
    <UserPost likes={1200} replies={30} postImg='/post1.png' postTitle="Ram Ram Bhaiyo" />
    <UserPost likes={12370} replies={320} postImg='/post3.png' postTitle="Scammer Alert" />
    <UserPost likes={12370} replies={320}  postTitle="Aaj insta nahi chalega me shaadi me ja raha hun " />
   
    
     </>
    )
  }
  
  export default UserPage