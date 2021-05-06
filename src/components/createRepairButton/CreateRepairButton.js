import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import "./CreateRepairButton.css";

const CreateRepairButton = () => {
    return (
        <div  className="createRepair">
            <Link to="/createRepair"><FontAwesomeIcon icon={faPen} className="createRepairIcon"/>Nieuwe
                reparatie
            </Link>
        </div>
    );
};


export default CreateRepairButton;