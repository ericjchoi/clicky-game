import React from "react";
import "./mainPictureContainer.css";

function MainPictureContainer(props) {
    return (
        <div className={`pictureContainer text-center ${props.shakePictures}`}>{props.children}</div>
    );
}
// Export MainPictureContainer component
export default MainPictureContainer;