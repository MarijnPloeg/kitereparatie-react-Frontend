import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo, faInfoCircle, faPen} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const Repair = (repair) => {

    const {repairType, appUserId, dateCreated, repairStatus} = repair.repair;
    const firstName = appUserId.firstName;
    const lastName = appUserId.lastName;
    let type;
    let status;

    if (repairType === "KITE") type = "Kite reparatie";
    else if (repairType === "Bar") type = "Bar reparatie"
    else if (repairType === "WETSUIT") type = "Wetsuit reparatie"
    else if (repairType === "BOARD") type = "Board reparatie";

    if (repairStatus === true) status = "Klaar"
    else status = "Open"

    useEffect(() => {
        console.log("Repair Type ",repair.repair.repairType);
    }, [repair]);

    return (
        <div className="repair">
            <p className="repairType">{type}</p>
            <p className="dateCreated">{dateCreated.substr(0, 10)}</p>
            <p className="name">{firstName + " " + lastName}</p>
            <p className={status}>{status}</p>
            <Link className="info" to="/klant"><FontAwesomeIcon icon={faInfoCircle}/></Link>
        </div>);
}

export default Repair;