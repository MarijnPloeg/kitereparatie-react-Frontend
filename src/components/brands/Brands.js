import React, {useEffect, useState} from "react";
import Brand from "../brand/Brand";
import axios from "axios";
import "./Brands.css";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faFile} from "@fortawesome/free-solid-svg-icons";


const Brands = () => {
    const {handleSubmit, register} = useForm();
    const [searchTerm, setSearchTerm] = useState("");
    const [brands, setBrands] = useState([]);
    const url = "http://localhost:8088/brands";

    async function fetchBrands() {
        try {
            const brandsData = await axios.get(url);
            setBrands(brandsData.data);
        } catch (e) {
            console.log(e);
        }
    }

    async function saveBrand(data) {
        try {
            const newBrand = await axios.post("http://localhost:8088/brands", data);
            console.log(newBrand.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        url && fetchBrands();
    }, [brands]);

    function onSubmit(data, e) {
        e.target.reset();
        console.log(data.name + data.type);
        let brand = {
            brandName: data.name,
            brandType: data.type
        }
        saveBrand(brand).then(r => {
            console.log(r)
        });
    }

    return (
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
