import React, {useEffect, useState} from "react";
import Brand from "../brand/Brand";
import axios from "axios";
import "./Brands.css";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";


const Brands = () => {
    const {handleSubmit, register} = useForm();
    const [searchTerm, setSearchTerm] = useState("");
    const [requestError, setRequestError] = useState();
    const [brands, setBrands] = useState([]);
    const accessToken = localStorage.getItem("token")
    const apiURL = "http://localhost:8088";

    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})

    async function fetchBrands() {
        try {
            const brandsData = await authAxios.get("/brands");
            setBrands(brandsData.data);
        } catch (e) {
            setRequestError(e.message)
        }
    }

    async function saveBrand(data) {
        try {
            const newBrand = await authAxios.post("/brands", data);
        } catch (e) {
            setRequestError(e.message)
        }
    }

    useEffect(() => {
        apiURL && fetchBrands();
    }, [brands]);

    function onSubmit(data, e) {
        e.target.reset();
        let brand = {
            brandName: data.name,
            brandType: data.type
        }
        saveBrand(brand).then(r => {
        //    Nothing to see here
        });
    }

    return (
        //TODO: Add error message on request error, add search bar for brands
        <div className="brandsContainer">
            <div className="brandList">
                    <form onSubmit={handleSubmit(onSubmit)} className="brand">
                        <input type="text" className="brandNameInput" placeholder="Merknaam..." {...register("name")}/>
                        <select className="brandTypeInput" {...register("type")}>
                            <option value="KITE">Kite merk</option>
                            <option value="BOARD">Board merk</option>
                            <option value="WETSUIT">Wetsuit merk</option>
                        </select>
                        <button className="editBrand" type="submit"><FontAwesomeIcon icon={faFile}/></button>
                    </form>
                {brands.filter(val => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.data.brandName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                        return <Brand id={val.brandID} name={val.brandName} type={val.brandType}/>
                    }
                )}
            </div>
        </div>

    );
};

export default Brands;
