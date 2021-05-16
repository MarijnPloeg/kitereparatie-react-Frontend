import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo, faInfoCircle, faPen} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const Repair = (data) => {

    const {appUserId, employeeList,brand, repairType, repairNote, model, size, dateCreated, repairStatus} = data.data;
    let brandName = ""
    let status = "";
    let type = "";
    let repairCustomer = appUserId.firstName + " " + appUserId.lastName;
    let repairEmployee = "";

    if (employeeList.length === 0) repairEmployee = "Nog niet aangeschreven"
    else repairEmployee = employeeList.name

    if (brand === null) brandName = "-";
    else brandName = brand.brandName;

    if (!repairStatus) status = "Klaar"
    else if (repairStatus) status = "Open"

    if (repairType === "KITE") type = "Kite reparatie"
    else if (repairType === "BAR") type = "Bar reparatie"
    else if (repairType === "BOARD") type = "Board reparatie"
    else if (repairType === "WETSUIT") type = "Wetsuit reparatie"

    return (
        <div className="repair">
            <h3 className="repairType">{type}</h3>
            <p className="repairNote">{repairNote}</p>
            <p className="repairBrand"><span className="bolder">Merk: </span>{brandName}</p>
            <p className="repairModel"><span className="bolder">Model: </span>{model}</p>
            <p className="repairSize"><span className="bolder">Maat: </span>{size}</p>
            <p className="repairDateIn"><span className="bolder">Ingeleverd op: </span>{dateCreated.substr(0, 10)}</p>
            <p className="repairDateOut"><span className="bolder">Klaar op: </span></p>
            <button className={status}>{status}</button>
            <div className="repairRelations">
                <p className="repairEmployee">Werknemer: {repairEmployee}</p>
                <p className="repairCustomer">Klant: {repairCustomer} </p>
            </div>
        </div>);
}

export default Repair;