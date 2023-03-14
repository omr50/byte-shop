import { useState, createContext, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";
// context allows us to access values that we create
// in parts of the app that are children of the node
// that we wrap the UserProvider on. This will be
// used for managing user and access.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    })
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}