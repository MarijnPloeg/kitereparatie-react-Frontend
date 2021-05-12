import {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = props => {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider
            value={[user, setUser]}>
            {this.props.children}
        </UserContext.Provider>
    );
}


