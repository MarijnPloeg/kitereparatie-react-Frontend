import {createContext, useState} from "react";
import {set} from "react-hook-form";

export const AddressContext = createContext();

export const AddressProvider = props => {
    const [address, setAddress] = useState({address :{}});
    return (
        <AddressContext.Provider
            value={[address, setAddress]}>
            {this.props.children}
        </AddressContext.Provider>
    );
}


