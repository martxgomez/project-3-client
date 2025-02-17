//IMPORTS 
import { createContext, useState } from "react"

const UserContext = createContext();

function UserProviderWrapper(props) {
const [user, setUser]=useState()

return(
    <UserContext.Provider value= {{user, setUser}}>
      {/* {props.children}  por ahora no*/}
    </UserContext.Provider>
)

}
export { UserContext, UserProviderWrapper};
