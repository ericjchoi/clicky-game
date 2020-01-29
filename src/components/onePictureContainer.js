import React from "react";
import "./onePictureContainer.css";

function OnePictureContainer(props) {
    return (
        <img onClick={() => props.stateHandle(props.name)} src={props.url} alt={props.name} className="img-thumbnail" style={{ width: 11 + "em" }} />
    );
}

export default OnePictureContainer;