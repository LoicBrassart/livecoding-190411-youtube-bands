import React from "react";
import Band from "./Band";

class Gallery extends React.Component {
  render() {
    return (
      <React.Fragment>
        Gallery
        <Band bandName="Toto1" />
        <Band bandName="Toto2" />
      </React.Fragment>
    );
  }
}
export default Gallery;
