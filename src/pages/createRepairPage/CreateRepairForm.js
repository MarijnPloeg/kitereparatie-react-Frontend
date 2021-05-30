import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {set, useForm} from "react-hook-form";
import axios from "axios";
//Styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./CreateRepairForm.css";
import {RepairContext} from "../../context/Repair";


const CreateRepairForm = () => {
    const [repairType, setRepairType] = useState(null);
    const [brands, setBrands] = useState();
    const {handleSubmit, register} = useForm();
    const repair = useContext(RepairContext);
    const url = "http://localhost:8088/brands"

    useEffect(() => {
        fetchBrands();
    }, []);

    async function fetchBrands() {
        try {
            const res = await axios.get(url);
            console.log(res.data)
            setBrands(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    function onSubmit(data) {
        console.log(repair);
    }

    return (
        <div className="formBackground">
            <div className="formContainer">
                <Link to="/myRepairs"><FontAwesomeIcon icon={faArrowLeft}/>Terug</Link>
                <div className="selectButtons">
                    <input type="radio" id="kite" name="repairOptions" value="kite"
                           onClick={() => setRepairType("Kite")}/>
                    <label htmlFor="kite">Kite reparatie</label>

                    <input type="radio" id="bar" name="repairOptions" value="bar" onClick={() => setRepairType("Bar")}/>
                    <label htmlFor="bar">Bar reparatie</label>

                    <input type="radio" id="board" name="repairOptions" value="board"
                           onClick={() => setRepairType("Board")}/>
                    <label htmlFor="board">Board reparatie</label>

                    <input type="radio" id="wetsuit" name="repairOptions" value="wetsuit"
                           onClick={() => setRepairType("Wetsuit")}/>
                    <label htmlFor="wetsuit">Wetsuit reparatie</label>
                </div>
                {repairType != null && (
                    <form onSubmit={handleSubmit(onSubmit)} className="repairForm">
                        <div className="generalInfo">
                            <label htmlFor="brand" className="inputLabel">Merk
                                <input
                                    className="inputBoxBrand"
                                    type="text"
                                    id="brand"
                                    {...register("brand")}
                                />
                            </label>
                            <label htmlFor="model" className="inputLabel">Model
                                <input
                                    className="inputBoxModel"
                                    type="text"
                                    id="model"
                                    {...register("model")}
                                />
                            </label>
                            <label htmlFor="year" className="inputLabel">Bouwjaar
                                <input
                                    className="inputBoxYear"
                                    type="text"
                                    id="year"
                                    {...register("year")}
                                />
                            </label>
                            <label htmlFor="size" className="inputLabel">Maat
                                <input
                                    className="inputBoxSize"
                                    type="text"
                                    id="size"
                                    {...register("size")}
                                />
                            </label>
                            <label htmlFor="note" className="inputLabel">Opmerking
                                <textarea
                                    className="inputBoxNote"
                                    id="note"
                                    {...register("note")}
                                />
                            </label>
                        </div>
                        {repairType === "Kite" && (
                            <div className="specificInfo">
                                <div className="repairTypes">
                                    <input type="radio" id="Doek" name="kiteRepair"
                                           value="Doek" {...register("fabric")}/>
                                    <label htmlFor="Doek">Doek</label>
                                    <input type="radio" id="Lekkage" name="kiteRepair"
                                           value="Lekkage" {...register("leak")}/>
                                    <label htmlFor="Lekkage">Lekkage</label>
                                    <input type="radio" id="Bridles" name="kiteRepair"
                                           value="Bridles" {...register("bridles")}/>
                                    <label htmlFor="Bridles">Bridles</label>
                                    <input type="radio" id="Anders" name="kiteRepair"
                                           value="Anders" {...register("different")}/>
                                    <label htmlFor="Anders">Anders</label>
                                </div>
                                {repairType === "bar" && (
                                    <div className="specificInfo">
                                        <span>Lekkkages</span>
                                    </div>
                                )}
                                {/*<div className="repairTypes">*/}
                                {/*    <input type="radio" id="Canope" name="damageType"*/}
                                {/*           value="Canope" {...register("Canope")}/>*/}
                                {/*    <label htmlFor="Canope">Canope</label>*/}
                                {/*    <input type="radio" id="LE" name="damageType"*/}
                                {/*           value="LE" {...register("LE")}/>*/}
                                {/*    <label htmlFor="LE">Leading edge</label>*/}
                                {/*    <input type="radio" id="Strut" name="damageType"*/}
                                {/*           value="Strut" {...register("Strut")}/>*/}
                                {/*    <label htmlFor="Strut">Strut</label>*/}
                                {/*</div>*/}
                            </div>
                        )
                        }

                        <button type="submit">Verstuur</button>
                    </form>
                )

                }

            </div>
        </div>
    );
};

export default CreateRepairForm;
