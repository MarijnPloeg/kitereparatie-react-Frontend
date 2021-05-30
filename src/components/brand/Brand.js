import {faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Brand.css";
import {useState} from "react";

const Brand = ({id, name, type}) => {
    const apiURL = "http://localhost:8088";
    const [error, setError] = useState("");

    let brandType;
    if (type === "BOARD") {
        brandType = "Board merk";
    } else if (type === "KITE") {
        brandType = "Kitesurf merk";
    } else if (type === "WETSUIT") {
        brandType = "Wetsuit brand";
    }

    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})

    async function deleteBrand(){
        try {
            const deletedBrand = await authAxios.delete(`/brands/brand/${id}`);
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div className="brand">
            <p className="brandName">{name}</p>
            <p className="brandType">{brandType}</p>
            <button className="editBrand" onClick={deleteBrand}><FontAwesomeIcon icon={faTrash}/></button>
            {/*{ Todo: Show error*/}
                error
            }
        </div>
    );
}

export default Brand;