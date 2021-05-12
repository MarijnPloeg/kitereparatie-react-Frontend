import {createContext, useState} from "react";

export const selectedUserContext = createContext();

export const SelectedUserProvider = props => {
    const [selectedUser, setSelectedUser] = useState({})

    return (
        <selectedUserContext.Provider
            value={[selectedUser, setSelectedUser]}>
            {this.props.children}
        </selectedUserContext.Provider>
    );
}


