import Cookies from "js-cookie";
import { createContext, useState } from "react";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(Cookies.get("auth"));
    const [search, setSearch] = useState();
    const [openModal, setOpenModal] = useState(false)
    const [ url ,setUrl] = useState()
    return (
        <AuthContext.Provider value={{ auth, setAuth,search,setSearch,openModal,setOpenModal,url,setUrl }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;