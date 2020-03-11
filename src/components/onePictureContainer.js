import React from "react";
import "./onePictureContainer.css";

// For individual picture
function OnePictureContainer(props) {
    return (
        <img onClick={() => props.stateHandle(props.name)} src={props.url} alt={props.name} className="img-thumbnail" style={{ width: 10 + "em" }} />
    );
}

// Export OnePictureContainer component
export default OnePictureContainer;