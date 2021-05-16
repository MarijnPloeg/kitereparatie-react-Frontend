import {faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Brand.css";
import {useState} from "react";

const Brand = ({id, name, type}) => {

    const [error, setError] = useState("");

    let brandType;
    if (type === "BOARD") {
        brandType = "Board merk";
    } else if (type === "KITE") {
        brandType = "Kitesurf merk";
    } else if (type === "WETSUIT") {
        brandType = "Wetsuit brand";
    }

    async function deleteBrand(){
        try {
            const deletedBrand = await axios.delete(`http://localhost:8088/brands/brand/${id}`);
            console.log(deletedBrand.data);
        } catch (e) {
            console.log(e.data);
        }
        console.log(id)
    }

    return (
        <div className="brand">
            <p className="brandName">{name}</p>
            <p className="brandType">{brandType}</p>
            <button className="editBrand" onClick={deleteBrand}><FontAwesomeIcon icon={faTrash}/></button>

        </div>
    );
}

export default Brand;