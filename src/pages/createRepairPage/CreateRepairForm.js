import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
//Styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./CreateRepairForm.css";


const CreateRepairForm = () => {
    const [repairType, setRepairType] = useState("Kite");
    const {handleSubmit, register} = useForm();
    return (
        <div className="formBackground">
            <div className="formContainer">
                <Link to="/myRepairs"><FontAwesomeIcon icon={faArrowLeft}/>Terug</Link>
                <div className="selectButtons">
                    <input type="radio" id="kite" name="repairOptions" value="kite"/>
                    <label htmlFor="kite">Kite reparatie</label>

                    <input type="radio" id="bar" name="repairOptions" value="bar"/>
                    <label htmlFor="bar">Bar reparatie</label>

                    <input type="radio" id="board" name="repairOptions" value="board"/>
                    <label htmlFor="board">Board reparatie</label>

                    <input type="radio" id="wetsuit" name="repairOptions" value="wetsuit"/>
                    <label htmlFor="wetsuit">Wetsuit reparatie</label>
                </div>
                <form action="" className="repairForm">
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
                </form>
            </div>
        </div>
    );
};

export default CreateRepairForm;
