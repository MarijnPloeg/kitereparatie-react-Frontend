import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Brand = ({name, type}) => {

    return (
        <div className="brand">
            <p>{name}</p>
            <p>{type}</p>
            <button className="edit"><FontAwesomeIcon icon={faPen}/></button>
        </div>
    );
}

export default Brand;