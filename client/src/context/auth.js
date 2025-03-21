import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoggedIn = createContext();

const LoggedInProvider = ({ children }) => {

    const [User,setUser] = useState();

    const [isLoggedIn, setisLoggedIn] = useState(() => {
        const storedLog = localStorage.getItem('log');
        return storedLog ? JSON.parse(storedLog) : false;
    });

    useEffect(() => {
        console.log("Is Logged Called");
        localStorage.setItem('log', JSON.stringify(isLoggedIn));
    },[isLoggedIn]);

    const value = {
        isLoggedIn,
        setisLoggedIn,
        User,
        setUser
    };

    return (
        <LoggedIn.Provider value={value}>
            {children}
        </LoggedIn.Provider>
    )
}



export const LoggedState = () => {
    return useContext(LoggedIn); //Custom Hook Type
};

export default LoggedInProvider;

