import React, {useEffect, useState} from "react";
import Brand from "../brand/Brand";
import axios from "axios";
import "./Brands.css";


const Brands = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [brands, setBrands] = useState([]);
    const url = "http://localhost:8088/brands";

    async function fetchBrands() {
        try {
            const brandsData = await axios.get(url);
            setBrands(brandsData.data);
            console.log(brandsData.data)
        } catch (e) {
            console.log(escape);
        }
    }


    useEffect(() => {
        url && fetchBrands();
    }, [url]);

    return (
        <div className="brandsContainer">
            <div className="brandList">
                {brands.filter(val => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.data.brandName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                        console.log("Getting mapped here:", val, key);
                        return <Brand name={val.brandName} type={val.brandType}/>
                }
                )}
            </div>
        </div>

    );
};

export default Brands;
