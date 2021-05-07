import React, {useState} from "react";
import {Link} from "react-router-dom";
import {set, useForm} from "react-hook-form";
//Styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./CreateRepairForm.css";
import FabricRepair from "../../components/repairEstimates/kiteRepair/kiteRepairTypes/FabricRepair";
import KiteRepair from "../../components/repairEstimates/kiteRepair/KiteRepair";


const CreateRepairForm = () => {
    const [repairType, setRepairType] = useState(null);
    const {handleSubmit, register} = useForm();

    function onSubmit(data) {
        console.log(data)
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
                                <span className="repairTypes">
                                    <input type="radio" id="Doek" name="selectRepair"
                                           value="Doek" {...register("fabric")}/>
                                    <label htmlFor="Doek">Doek</label>
                                    <input type="radio" id="Lekkage" name="selectRepair"
                                           value="Lekkage" {...register("leak")}/>
                                    <label htmlFor="Lekkage">Lekkage</label>
                                    <input type="radio" id="Bridles" name="selectRepair"
                                           value="Bridles" {...register("bridles")}/>
                                    <label htmlFor="Bridles">Bridles</label>
                                    <input type="radio" id="Anders" name="selectRepair"
                                           value="Anders" {...register("different")}/>
                                    <label htmlFor="Anders">Anders</label>
                                </span>
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
